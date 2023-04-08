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
            <div className='infos'>
                <div className='tcadre'>
                    <span className='btn'>
                        <img src={img} width="16px"/>
                    </span>
                    <span className='searchBar'>
                        <input 
                            style={{width: '100%', height: '100%'}}
                            type="text" 
                            placeholder="Rechercher un patient" 
                            value={searchTerm} 
                            onChange={handleInputChange} 
                    />
                    </span>
                    <span>
                        <Button style={{width:200, height: 30,  background: ' #1846a3 ', color: 'white', border: 'none', cursor: 'pointer', marginLeft: '75%', marginTop: '0.5%'}}>
                            Ajouter un patient
                        </Button>
                    </span>
                    {/* <div className='tableau' style={{marginTop: '3%'}}>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Age</th>
                                <th>Pathologie</th>
                                <th>Profil</th>
                            </tr>
                        </thead> */}
                    <div style={{marginTop: '3%'}}>
                        <span style={{margin: 50}}>
                            Nom
                        </span>
                        <span style={{ margin: 50}}>
                            Prénom
                        </span>     
                        <span style={{margin: 50}}>
                            Age
                        </span>
                        <span style={{margin: 50}}>
                            Pathologie
                        </span>
                        <span style={{margin: 50}}>
                            Profil
                        </span> 
                    </div>
                </div>
                <div style={{marginTop: '10%'}}>
                    <span style={{margin: 50}}>
                        KANDE
                    </span>
                    <span style={{ margin: 40}}>
                        Mariama
                    </span>     
                    <span style={{margin: 50}}>
                        48
                    </span>
                    <span style={{ margin: 55}}>
                        Diabete
                    </span>   
                    <span>
                        <Button onClick={() => navigate("/pathologie")} style={{width:80, height: 30, marginTop: 15, margin: 50, background: '#F0F1FA', color: 'blue', border: 'none', cursor: 'pointer'}}>
                            Ouvrir
                        </Button>
                    </span>
                    <span style={{margin: 50, color: '#d9534f'}}>
                        <FaTrash />
                    </span> 
                </div>
            </div> 
            
            <Footer/>
        </div>
    )
}

export default ListPatients;