/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, {useContext, useState, useEffect} from 'react';
import img from '../images/easy-health.png';
import photo from '../images/dupon.jpg';    
import Footer from './footer';
import messagerie from '../images/messagerie.png';
import courbe from '../images/courbe.png';
import doc from '../images/document.png';
import MenuBar from './menuBar';
import { Button } from '@mui/material';
import Line  from '../images/Line12.png';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import UserContext from "./UserContext";

function Pathologie() {
    const navigate = useNavigate();
    const location = useLocation();
    const patientMail = location.state?.patientMail;
    const { userEmail } = useContext(UserContext);
    const [patientData, setPatientData] = useState(null);
    const [doctorData, setDoctorData] = useState(null);

    useEffect(() => {
        const fetchPatientData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/patients/${patientMail}`);
                setPatientData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du patient:', error);
            }
        };

        fetchPatientData();
    }, []);

    useEffect(() => {
        const fetchDoctorData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/medecins/${userEmail}`);
                setDoctorData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données du médecin:", error);
            }
        };

        fetchDoctorData();
    }, []);



    return (
        <div className='allProfilPage'>
            <div className='headerProfil'>
                <span style={{position: 'absolute', marginLeft: '45%', top: '0px'}}>
                    <img src={img} width="20%" />
                </span>
            </div>
            <br/>
            <span>  
                <MenuBar />
            </span>
            <div className='Pprofil'>
                <h4>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </h4>
                <br/>
                {/* A modifier par les données de l'API*/}
                <img src={`data:image/jpeg;base64,${patientData?.photoProfil}`} alt="Photo de profil" width="200" height="150"/>
            </div>
            <div className="profile-details-wrapper">
                <div className="profile-detail">
                    <p><b>Nom : {patientData?.nom} {patientData?.prenom}</b></p>
                    <p><b>Adresse mail : {patientData?.adresseMail}</b></p>
                    <p><b>Numéro de téléphone : {patientData?.numeroTelephone}</b></p>
                </div>

                <div className="profile-details">
                    {patientData?.consultations
                        .filter(
                            (consultation) =>
                                consultation.medecinNom === doctorData?.nom &&
                                consultation.ordonnance !== null &&
                                consultation.ordonnance.prescriptions.length > 0
                        )
                        .map((consultation, index) => (
                            <div key={index}>
                                <h5>
                                    <b>Consultation {index + 1} :</b>
                                </h5>
                                <br />
                                <p>
                                    <b>Date :</b> {new Date(consultation.date).toLocaleDateString()}
                                </p>

                                <p>
                                    <b>Pathologie :</b> {consultation.pathologieLibelle}
                                </p>
                                <p>
                                    <b>Médecin :</b> Dr.{consultation.medecinNom}
                                </p>
                                <p>
                                    <b>Ordonnance :</b>
                                </p>
                                <ul>
                                    {consultation.ordonnance.prescriptions.map((prescription, idx) => (
                                        <li key={idx}>
                                            {prescription.medicamentNom} (DESCRIPTION : {prescription.medicamentDescription})
                                        </li>
                                    ))}
                                </ul>
                                <p>------------------------</p>
                            </div>
                        ))}
                </div>


            </div>
            {/* A modifier par les données de l'API*/}
            <div>
                <span className='btn1'>
                    <Button onClick={() => navigate('/')} style={{color: 'white', marginLeft: '8%'}}>
                        CONTACTER
                    </Button>
                </span>
                <span className='btn2'>
                    <Button onClick={() => navigate('/data', { state: { patientMail: patientMail } })} style={{color: 'white', marginLeft: '8%'}}>
                       SUIVI & EVOLUTION
                    </Button>
                </span>
                <span className='btn3'>
                    <Button onClick={() => navigate('/stockage', { state: { patientMail: patientMail } })} style={{color: 'white', marginLeft: '8%'}}>
                       DOCUMENTS PARTAGES 
                    </Button>
                </span>
            </div>
            <div style={{marginTop: '10%', marginLeft: '20%'}}>
                <span style={{margin: 100}}>
                    <img src={messagerie} width="10%" />
                </span>
                <img src={Line} style={{position: 'absolute', marginTop: '-5%'}}/>
                <span style={{margin: 115}}>
                    <img src={courbe} width="15%" />
                </span>
                <img src={Line} style={{position: 'absolute', marginTop: '-5%'}}/>
               <span style={{margin: 100}}>
                    <img src={doc} width="10%" />
               </span>
            </div>
            <Footer/>
        </div>
    )
}

export default Pathologie;