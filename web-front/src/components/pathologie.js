/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/easy-health.png';
import photo from '../images/photo.jpg';    
import Footer from './footer';
import messagerie from '../images/messagerie.png';
import courbe from '../images/courbe.png';
import doc from '../images/document.png';
import MenuBar from './menuBar';
import { Button } from '@mui/material';
import Line  from '../images/Line12.png';
import { useNavigate, useLocation } from "react-router-dom";

function Pathologie() {
    const navigate = useNavigate();
    const location = useLocation();
    const patientMail = location.state?.patientMail;
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; John doe
                </h4>
                <br/>
                <img src={photo} alt="Photo de profil" width="200" height="150"/>
            </div>
            <div className="profile-details-wrapper">
                <div className="profile-detail">
                    <p><b>Sexe: Homme</b></p>
                    <p><b>Age: 35 ans</b></p>
                    <p><b>Groupe sanguin: A+</b></p>
                </div>
                <div className="profile-details">
                    <p><b>Inscription: 01/04/2023</b></p>
                    <p><b>Pathologie: Cardiologie</b></p>
                    <p><b>Identifiant: 12</b></p>
                </div>
            </div>
            <div>
                <span className='btn1'>
                    <Button style={{color: 'white', marginLeft: '8%'}}>
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