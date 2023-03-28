/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/easy-health.png';
import Footer from './footer';
import MenuBar from './menuBar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Upload from './Upload';

function Documents() {
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
            <Grid container spacing={{ xs: 2, md: 3, sm: 5 }} sx={{ display: 'flex', flexDirection: 'row' }}>
 				<Grid item xs={12} md={7} sm={7}>
 					<TextField
						id='search'
 						placeholder='Nom, extension, ...'
 						label='Rechercher un fichier ou un dossier'
 						variant='outlined'
 						sx={{ width: '60%' }}
                        style={{marginTop: '15%', marginLeft: '60%'}}
						/>
					</Grid>
                </Grid>
                <span>
                    <Upload />
                </span>
            <Footer/>
        </div>
    )
}

export default Documents;