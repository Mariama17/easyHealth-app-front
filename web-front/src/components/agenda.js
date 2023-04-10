import React, { useState, useEffect } from 'react';
import { ReactAgenda, guid } from 'react-agenda';
import 'moment/locale/fr.js';
import axios from 'axios';

const colors = {
    'color-1': 'rgba(102, 195, 131 , 1)',
    'color-2': 'rgba(242, 177, 52, 1)',
    'color-3': 'rgba(235, 85, 59, 1)',
};

const now = new Date();

const Agenda = ({ userEmail }) => {
    const [selected, setSelected] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/rdv/medecin/" + userEmail);
                const data = response.data.map(rdv => {
                    const startDateTime = new Date(rdv.dateRdv + "T" + rdv.heureRdv);
                    const [hours, minutes] = rdv.duree.split(':');
                    const endDateTime = new Date(startDateTime.getTime() + (hours * 60 + parseInt(minutes)) * 60000);
                    return {
                        _id: guid(),
                        name: `Durée du RDV: ${rdv.duree} - Email: ${rdv.adresseMailPatient} - Téléphone: ${rdv.numeroTelephonePatient}`,
                        startDateTime: startDateTime,
                        endDateTime: endDateTime,
                        classes: 'color-1',
                    };
                });
                setItems(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données', error);
            }
        };
        fetchData();
    }, [userEmail]);

    const handleCellSelection = (item) => {
        console.log('handleCellSelection', item);
    };

    const handleItemEdit = (item) => {
        console.log('handleItemEdit', item);
    };

    const handleRangeSelection = (item) => {
        console.log('handleRangeSelection', item);
    };

    return (
        <div className="agenda">
            <ReactAgenda
                minDate={now}
                maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
                disablePrevButton={false}
                startDate={startDate}
                cellHeight={20}
                locale="fr"
                items={items}
                numberOfDays={4}
                rowsPerHour={2}
                itemColors={colors}
                autoScale={false}
                fixedHeader={true}
                onItemEdit={handleItemEdit}
                onCellSelect={handleCellSelection}
                onRangeSelection={handleRangeSelection}
            />
        </div>
    );
};

export default Agenda;
