import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, LineController, LineElement, PointElement, LinearScale, TimeScale, Tooltip } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { format } from 'date-fns';

// Enregistrez les contrôleurs, éléments et échelles nécessaires pour Chart.js
Chart.register(LineController, LineElement, PointElement, LinearScale, TimeScale, Tooltip);

function Dashboard({ patientMail, selectedPathology, startDate, endDate }) {
    const [mesures, setMesures] = useState([]);

    useEffect(() => {
        if (patientMail && selectedPathology && startDate && endDate) {
            const formattedStartDate = startDate.toISOString().split('T')[0];
            const formattedEndDate = endDate.toISOString().split('T')[0];

            axios
                .get(
                    `http://localhost:8080/mesure/mesuresPatientAvecPathalogie/${patientMail}/${selectedPathology}/${formattedStartDate}/${formattedEndDate}`
                )
                .then((response) => {
                    setMesures(response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération des données : ', error);
                });
        }
    }, [patientMail, selectedPathology, startDate, endDate]);

    const matinChartRef = useRef();
    const midiChartRef = useRef();
    const soirChartRef = useRef();

    useEffect(() => {
        return () => {
            const chartRefs = [matinChartRef, midiChartRef, soirChartRef];
            chartRefs.forEach((chartRef) => {
                if (chartRef.current && chartRef.current.chartInstance) {
                    chartRef.current.chartInstance.destroy();
                }
            });
        };
    }, []);


    // Créez les données pour les graphiques
    const chartData = {
        matin: {},
        midi: {},
        soir: {},
    };

    console.log(mesures);

    mesures.sort((a, b) => new Date(a.date) - new Date(b.date));

    mesures.forEach((mesure) => {
        if (!chartData[mesure.periode]) {
            chartData[mesure.periode] = {};
        }
        if (!chartData[mesure.periode][mesure.pathologie]) {
            chartData[mesure.periode][mesure.pathologie] = {
                labels: [],
                data: [],
            };
        }
        const dateLabel = format(new Date(mesure.date), 'dd/MM/yyyy');
        const dataIndex = chartData[mesure.periode][mesure.pathologie].labels.indexOf(dateLabel);
        if (dataIndex === -1) {
            chartData[mesure.periode][mesure.pathologie].labels.push(dateLabel);
            chartData[mesure.periode][mesure.pathologie].data.push(mesure.valeur);
        } else {
            chartData[mesure.periode][mesure.pathologie].data[dataIndex] += mesure.valeur;
        }
    });



    console.log(chartData);

    const createLineDataset = (periode, color) => {
        if (!chartData[periode] || !chartData[periode][selectedPathology]) {
            return null;
        }

        const data = chartData[periode][selectedPathology].data;
        const label = `${selectedPathology} (${periode})`;

        return {
            label: label,
            data: data,
            fill: false,
            backgroundColor: color,
            borderColor: color,
            tension: 0.1,
        };
    };




    const colors = [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
    ];

    const renderLineChart = (periode) => {
        const dataset = createLineDataset(periode, colors[0]);

        if (!dataset) {
            return null;
        }

        let chartRef;
        switch (periode) {
            case 'matin':
                chartRef = matinChartRef;
                break;
            case 'midi':
                chartRef = midiChartRef;
                break;
            case 'soir':
                chartRef = soirChartRef;
                break;
            default:
                break;
        }

        return (
            <Line
                ref={chartRef}
                data={{
                    labels: chartData[periode][selectedPathology]?.labels || [],
                    datasets: [dataset],
                }}
                options={{
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day',
                                displayFormats: {
                                    day: 'dd/MM/yyyy',
                                },
                                parser: 'dd/MM/yyyy',
                            },
                        },
                    },
                    plugins: {
                        tooltip: {
                            enabled: true,
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: '#ffffff',
                            bodyColor: '#ffffff',
                            borderColor: '#ffffff',
                            borderWidth: 1,
                            caretSize: 6,
                            cornerRadius: 6,
                            callbacks: {
                                title: (context) => {
                                    const { label } = context[0];
                                    return `Date: ${label}`;
                                },
                                label: (context) => {
                                    const { dataset, dataIndex } = context;
                                    const { label } = dataset;
                                    const value = dataset.data[dataIndex];
                                    const unit = mesures[dataIndex].unite;
                                    return `${label}: ${value} ${unit}`;
                                },

                            },
                        },
                    },
                }}
            />
        );
    };





    return (
        <div>
            <h2>Matin</h2>
            {renderLineChart('matin')}
            <h2>Midi</h2>
            {renderLineChart('midi')}
            <h2>Soir</h2>
            {renderLineChart('soir')}
        </div>
    );
}

export default Dashboard;


