/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import img from '../images/easy-health.png';
import MenuBar from './menuBar';
import Footer from './footer';
import BackButton from './BackButton';
import { useLocation, useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import Button from '@mui/material/Button';
import Dashboard from './dashboard';

import AdapterDateFns from '@mui/lab/AdapterDateFns'; // Revenir à @mui/lab
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subWeeks } from 'date-fns';

function Data() {
    const navigate = useNavigate();
    const location = useLocation();
    const patientMail = location.state?.patientMail;
    const { userEmail } = useContext(UserContext);
    const [pathologies, setPathologies] = useState([]);
    const [selectedPathology, setSelectedPathology] = useState('');
    const [startDate, setStartDate] = useState(subWeeks(new Date(), 1));
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        axios
            .get(`http://localhost:8080/pathologie/` + patientMail)
            .then((response) => {
                setPathologies(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données : ', error);
            });
    }, [patientMail]);


    return (
        <div className='allProfilPage'>
            <div className='headerProfil'>
                <span style={{position: 'absolute', marginLeft: '45%', top: '0px'}}>
                    <img src={img} width="20%" />
                </span>
            </div>
            <br/>
            <div style={{marginTop: '10%', marginLeft: '5%'}}>
                <BackButton patientMail={patientMail}  />
            </div>
            <div className='titleDataPage'>
                <h1>
                    Suivi & évolution du patient
                </h1>
            </div>
            <div id="buttonPathologie" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3%', marginLeft: '3%' }}>
                {pathologies.map((pathologie) => (
                    <Button
                        key={pathologie.id}
                        onClick={() => setSelectedPathology(pathologie.libelle)}
                        variant="contained"
                        color="primary"
                        style={{ margin: '5px', borderRadius: '25px' }}
                    >
                        {pathologie.libelle}
                    </Button>
                ))}
            </div>
            <div id="date" className='date'>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    mt={4}
                >
                    <DatePicker                     
                        selected={startDate}
                        onChange={(date) => {
                            if (!endDate || date < endDate) {
                                setStartDate(date);
                            }
                        }}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Date de début"
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => {
                            if (!startDate || date > startDate) {
                                setEndDate(date);
                            }
                        }}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Date de fin"
                    />
                </Box>
            </div>

            <div id="graphe" className='graphe'>
                {selectedPathology && startDate && endDate && (
                    <Dashboard
                        patientMail={patientMail}
                        selectedPathology={selectedPathology}
                        startDate={startDate}
                        endDate={endDate}
                    />
                )}
            </div>
            <br/>
            <br/><br/>
            <Footer/>
        </div>
    );
}
export default Data;