/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Footer from './footer';
import img from '../images/easy-health.png';
import report from '../images/report-icon.jpg';
import stethoscope from '../images/stethoscope.jpg';
import { useNavigate  } from "react-router-dom";
import Line  from '../images/Line9.png';
import { Grid, Typography, ImageListItem, Button } from '@mui/material';

function AboutUs() {
    const navigate = useNavigate();
  return (
    <div>
        <div className='headerAboutUs'>
            <span style={{position: 'absolute', marginLeft: '5%', top: '0px'}}>
                <img src={img} width="25%" />
            </span>
            <Grid item style={{marginLeft: '45%', marginTop: '1%'}}>
                <Button onClick={() => navigate("/home")}>
                    <Typography component='p' variant='button' color='white' cursor='pointer' fontFamily= 'Work Sans' fontStyle='normal' marginTop='-5%'>
                        <b>PAGE D'ACCUEIL</b>
					</Typography> 
                </Button>
                <img src={Line}/>
                <Button onClick={() => navigate("/contact")}>
                    <Typography component='p' variant='button' color='white' cursor='pointer'  fontFamily= 'Work Sans' fontStyle='normal' marginTop='-5.5%'>
                        <b>Nous contacter</b>
					</Typography> 
                </Button>
                <img src={Line} style={{marginRight: '2%'}}/>
                <Button onClick={() => navigate("/inscription")} style={{width:150, height: 30, background: ' #1846a3 ', color: 'white', border: 'none', marginRight: 20, fontFamily: 'Work Sans', fontStyle:'normal', mixBlendMode: 'normal', marginTop:'-2%'}}>
                    <b>
                        S'inscrire
                    </b>
                </Button> 
                <Button onClick={() => navigate("/login")} style={{width:150, height: 30, background: ' white ', color: '#1846a3', border: 'none', fontFamily: 'Work Sans', fontStyle:'normal', marginTop:'-2%'}}>
                    <b>
                        Se connecter
                    </b>
                </Button>
            </Grid>
        </div>
        <br/>
        <body>
            <div className="aboutUs">
                <p>
                    <b style={{color: 'rgb(64, 64, 197)'}}>
                        EasyHealth
                    </b>
                </p>
                <br/>
                <p>
                    Il permet au médecin d’avoir une vision détaillée sur l’évolution de<br/>
                    la santé du patient à travers des graphiques (courbes, diagrammes, etc.) <br/>
                    qui seront générées autamatiquement, des alertes des rappels, etc.<br/>
                    Le medecin pourra également transmettre des recommandations, des bulletins d’analyses, <br/>
                    des ordonnaces au patient, qui sera notifié en temps réel.  <br/>
                    <br/>
                    L’application mobiles sera capable de donner des recomrégime  <br/>
                    par exemple), sans intervention du medecin. <br/>
                    easyHealth easyHealth easyHealth <br/>
                    easyHealth easyHealth easyHealth easyHealth easyHealth easyHealth  <br/>
                    easyHealth easyHealth easyHealth <br/>
                    easyHealth easyHealth easyHealth easyHealth easyHealth<br/>
                    easyHealth easyHealth
                    easyHealth easyHealth easyHealth easyHealth easyHealth<br/>
                    easyHealth easyHealth easyHealth easyHealth easyHealth<br/>
                    easyHealth easyHealth easyHealth<br/>
                    easyHealth easyHealth easyHealth easyHealth 
            
                </p>
            </div>   
            <ImageListItem sx={{ width: '20%', paddingRight: 5, marginLeft: '10%', marginTop: '-20%'}}>
                <img src={stethoscope} alt="image"/>
            </ImageListItem>
            <ImageListItem sx={{ width: '15%', paddingRight: 5, marginLeft: '75%', marginTop: '-5%'}}>
                <img src={report} alt="image"/>
            </ImageListItem>
        </body>
        <Footer/>
    </div>
  )
}

export default AboutUs;

