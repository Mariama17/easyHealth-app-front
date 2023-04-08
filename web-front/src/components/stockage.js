/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/easy-health.png';
import MenuBar from './menuBar';
import { useNavigate } from "react-router-dom";
import Footer from './footer';
import BackButton from './BackButton';
import pdf from '../images/pdf.jpg';
import word from '../images/word.jpg';
import file from '../images/fichier.PNG';

function Stockage() {
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
            <div>
                <img src={pdf} style={{width: '10%', marginTop: '5%', marginLeft: '25%'}}/>
                <img src={word} style={{width: '8%', marginTop: '5%', marginLeft: '5%'}}/>
                <img src={file} style={{width: '8%', marginTop: '5%', marginLeft: '5%'}}/>
            </div>
        <Footer/>
        </div>
    )
};

export default Stockage; 

