/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from "react-bootstrap/Button";
import img from '../images/suivi-medical.png';
import img1 from '../images/cloche.png';
import img2 from '../images/menu.png';
import footer1 from '../images/facebook.png';
import footer2 from '../images/twiter.png';
import footer3 from '../images/linkdin.png';
import { useNavigate  } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function Principal() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='headerPrincipal'>
                <span>
                    <img src={img2} alt='logos' width='10%' style={{ marginLeft: '1%', marginTop: '15%'}}/>
                </span>
                <span>
                    <img src={img} alt='logos' width='55%' style={{marginLeft: '-150%'}}/>
                </span>
                <Grid container spacing={{ xs: 2, md: 6, sm: 10 }} sx={{ display: 'flex', flexDirection: 'row' }}>
					<Grid item xs={12} md={7} sm={7}>
						<TextField
							id='search'
							placeholder='Nom, prenom, pathologie'
							label='Rechercher un patient'
							variant='outlined'
							sx={{ width: '70%' }}
                            style={{marginTop: '5%', marginLeft: '55%'}}
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
            <div className='infos'>
                <span>
                    <label style={{width:100, height: 30, marginTop: 15, margin: 40, color: 'black', border: 'none'}}>
                        Nom
                    </label>
                </span>
                <span>
                    <label style={{width:100, height: 30, marginTop: 15, margin: 40, color: 'black', border: 'none'}}>
                        Prénom
                    </label>
                </span>
                <span>
                    <label style={{width:100, height: 30, marginTop: 15, margin: 40, color: 'black', border: 'none'}}>
                        Age
                    </label>
                </span>
                <span>
                    <Button onClick={() => navigate("/")} style={{width:100, height: 30, marginTop: 15, margin: 40, background: ' #1846a3 ', color: 'white', border: 'none'}}>
                        Pathologie
                    </Button>
                </span>
                <span>
                    <Button onClick={() => navigate("/")} style={{width:100, height: 30, marginTop: 15, margin: 30, background: ' red ', color: 'white', border: 'none'}}>
                        Supprimer
                    </Button>
                </span>
            </div>
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

export default Principal;
