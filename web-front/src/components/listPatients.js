/* eslint-disable jsx-a11y/alt-text */
import { React } from 'react';
import img from '../images/easy-health.png';
import Footer from './footer';
import MenuBar from './menuBar';
import PatientCards from './patientCards';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function ListPatients() {
    return (
        <div className='allProfilPage'>
            <div className='headerProfil'>
                <span style={{ position: 'absolute', marginLeft: '45%', top: '0px' }}>
                    <img src={img} width="20%" />
                </span>
            </div>
            <br/>
            <div style={{ display: 'flex'}}>
                <MenuBar />
                
                <Grid container spacing={{ xs: 2, md: 3, sm: 5 }} sx={{ display: 'flex', flexDirection: 'row' }}>
 				<Grid item xs={12} md={7} sm={7}>
 					<TextField
						id='search'
 						placeholder='Nom, Prenom, Phathologie'
 						label='Rechercher un patient'
 						variant='outlined'
 						sx={{ width: '80%' }}
                        style={{marginTop: '15%', marginLeft: '60%'}}
						/>
					</Grid>
                </Grid>
                <div style={{ flexGrow: 1, marginTop: '15%', marginLeft: '-80%'}}>
                    <PatientCards />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ListPatients;
