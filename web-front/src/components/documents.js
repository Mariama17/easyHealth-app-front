/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/suivi-medical.png';
import img1 from '../images/cloche.png';
import footer1 from '../images/facebook.png';
import footer2 from '../images/twiter.png';
import footer3 from '../images/linkdin.png';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuBar from './menuBar';
import FileUploader from './fileUploader';
import MenuStatistic from './menuStatistic';

function Documents() {
    return (
        <div>
            <div className='headerPrincipal'>
                <span>
                    <img src={img} alt='logos' width='45%' style={{ marginTop: '-5%'}}/>
                </span> 
                <Grid container spacing={{ xs: 2, md: 6, sm: 10 }} sx={{ display: 'flex', flexDirection: 'row' }}>
					<Grid item xs={12} md={7} sm={7}>
						<TextField
							id='search'
							placeholder='Nom, extension, ...'
							label='Rechercher un fichier ou un dossier'
							variant='outlined'
							sx={{ width: '170%' }}
                            style={{marginTop: '5%', marginLeft: '-30%'}}
						/>
					</Grid>
                </Grid>
                <span >
                    <img 
                        style={{marginTop: "85%", marginLeft: "-350%"}}
                        class="userpicture defaultuserpic" 
                        src={img1}  
                        witdh="35" 
                        height="35"
                    /> 
                </span>
                <span class="avatars">
                    <img 
                        style={{marginTop: "85%", marginLeft: "-200%"}}
                        class="userpicture defaultuserpic" 
                        src="https://moodle.esme.fr/theme/image.php/moove/core/1669880320/u/f2"  
                        witdh="35" 
                        height="35"
                    /> 
                </span>
            </div>
            <br/>
            <span>  
                <MenuBar />
            </span>
            <span>
                <MenuStatistic />
            </span>
            <span>
                <FileUploader />
            </span>
            <footer className='passforgottenfooter'>
                <p>
                    Politique relatives aux cookies
                </p>
                <a
                    href="https://www.facebook.com"
                    title="Rejoignez-nous sur Facebook"
                >
                    <img src={footer1} width="30px"/>
                </a>
                <a
                    href="https://twitter.com/"
                    title="Rejoignez-nous sur Twitter"
                >
                    <img src={footer2} width="30px"/>
                </a>
                <a
                    href="https://www.linkedin.com"
                    title="Rejoignez-nous sur LinkedIn"
                >
                    <img src={footer3} width="30px"/>
                </a>
            </footer>
        </div>
    )
}

export default Documents;