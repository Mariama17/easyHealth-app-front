/* eslint-disable jsx-a11y/alt-text */
import {React, useState } from 'react';
import img from '../images/easy-health.png';
import filter from '../images/filter.png';
import Footer from './footer';
import MenuBar from './menuBar';
import { FaTrash } from 'react-icons/fa';
import { TextField, Grid, Button } from '@mui/material';
// import Button from "react-bootstrap/Button";
import { useNavigate  } from "react-router-dom";
import PatientCards from './patientCards';

function ListPatients({ onSearch }) {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    };

    const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
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
        
            <br/>
            <div style={{ border: '1px solid red' }}>
                <PatientCards />
            </div>

            
            <Footer/>
        </div>
    )
}

export default ListPatients;