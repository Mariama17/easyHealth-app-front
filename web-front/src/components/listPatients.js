/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/easy-health.png';
import filter from '../images/filter.png';
import Footer from './footer';
import MenuBar from './menuBar';
import { FaTrash } from 'react-icons/fa';
import { TextField, Grid, Button } from '@mui/material';
// import Button from "react-bootstrap/Button";
import { useNavigate  } from "react-router-dom";

function ListPatients() {
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
        
            <br/>
            <div className='infos'>
                <div>
                    <span className='btn'>
                        <img src={img} width="16px"/>
                    </span>
                    <Grid container spacing={{ xs: 1, md: 2, sm: 5 }} sx={{ display: 'flex', flexDirection: 'row' }}>
				        <Grid item xs={12} md={7} sm={7}>
 					        <TextField
						        id='search'
						        placeholder='Nom, prénom, pathologie'
 						        label='Rechercher un patient...'
					            variant='outlined'
 						        sx={{ width: '100%' }}
                                style={{ marginLeft: '20%', marginTop: '1%'}}
 					        />
				        </Grid>
                    </Grid>
                    <Button onClick={() => navigate("/")} style={{width:200, height: 30,  background: ' #1846a3 ', color: 'white', border: 'none', cursor: 'pointer', marginLeft: '75%', marginTop: '-10%'}}>
                        Ajouter un patient
                    </Button>
                </div>
                <div className='tr-td'>
                    {/* <span className='btn'>
                        <img src={img} width="16px"/>
                    </span> */}
                    <span style={{margin: 50}}>
                        cadre-
                    </span>
                    <span style={{margin: 50}}>
                        Nom
                    </span>
                    <span style={{ margin: 50}}>
                        Prénom
                    </span>     
                    <span style={{margin: 50}}>
                        Age
                    </span>
                    <span>
                        <Button onClick={() => navigate("/pathologie")} style={{width:80, height: 30, marginTop: 15, margin: 50, background: '#F0F1FA', color: 'blue', border: 'none', cursor: 'pointer'}}>
                            Ouvrir
                        </Button>
                    </span>
                    <span style={{margin: 60, color: '#d9534f'}}>
                        <FaTrash />
                    </span>
                </div>
            </div> 
            <Footer/>
        </div>
    )
}

export default ListPatients;