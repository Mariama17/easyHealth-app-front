/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/easy-health.png';
import MenuBar from './menuBar';
import Footer from './footer';
import BackButton from './BackButton';
import { Button } from '@mui/material';
import Line  from '../images/Line12.png';
import courbe from '../images/courbe.png';
import Rectangle from '../images/Rectangle.png';
import { useNavigate } from "react-router-dom";

function Data() {
    const navigate = useNavigate();
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
            <div style={{marginTop: '10%', marginLeft: '25%'}}>
                <BackButton/>
            </div>
            <div className='titleDataPage'>
                <h1>
                    Suivi & évolution du patient
                </h1>
            </div>
            <div style={{marginTop: '10%', marginLeft: '15%'}}>
                <span style={{margin: 150}}>
                    <img src={Rectangle} width="20%" />
               </span>
               <img src={Line} style={{position: 'absolute', marginTop: '-2%'}}/>
                <span style={{margin: 200}}>
                    <img src={courbe} width="15%"/>
                </span>
            </div>
            <div className='btnMesure'>
                    {/* <Button style={{color: 'white'}}>
                        MESURES
                    </Button> */}
               
                {/* <span className=''>
                    <Button onClick={() => navigate('/')} style={{color: 'white', marginLeft: '20%'}}>
                       GRAPHIQUES
                    </Button>
                </span> */}
            </div>
            <Footer/>
        </div>
    );
}
export default Data;