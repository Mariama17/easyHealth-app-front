/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/easy-health.png';
import Line  from '../images/Line9.png';
import { useNavigate  } from "react-router-dom";
import { Button, Grid, Typography } from '@mui/material';

function Header () {
    const navigate = useNavigate();
    return (
        <header>
            <span style={{position: 'absolute', marginLeft: '50px', top: '0px'}}>
                <img src={img} width="50%" />
            </span>
            <Grid item style={{marginLeft: '45%', marginTop: '1%'}}>
                <Button onClick={() => navigate("/aboutUs")}>
                    <Typography component='p' variant='button' color='white' cursor='pointer' fontFamily= 'Work Sans' fontStyle='normal' marginTop='-5%'>
                        <b>Qui nous sommes?</b>
					</Typography> 
                </Button>
                <img src={Line}/>
                <Button onClick={() => navigate("/contact")}>
                    <Typography component='p' variant='button' color='white' cursor='pointer'  fontFamily= 'Work Sans' fontStyle='normal' marginTop='-5.5%'>
                        <b>Nous contacter</b>
					</Typography> 
                </Button>
                <img src={Line} style={{marginRight: '2%'}}/>
                <Button onClick={() => navigate("/admin")} style={{width:150, height: 30, background: ' #1846a3 ', color: 'white', border: 'none', marginRight: 20, fontFamily: 'Work Sans', fontStyle:'normal', mixBlendMode: 'normal', marginTop:'-2%'}}>
                    <b>
                        Admin
                    </b>
                </Button> 
                <Button onClick={() => navigate("/login")} style={{width:150, height: 30, background: ' white ', color: '#1846a3', border: 'none', fontFamily: 'Work Sans', fontStyle:'normal', marginTop:'-2%'}}>
                    <b>
                        Se connecter
                    </b>
                </Button>
            </Grid>
            <div style={{ marginLeft: "50%", marginTop: "10%", color: "white", textAlign: 'center' }}>
                <h3>
                    Votre santé en toute simplicité avec <br/> 
                            easyHealth !
                </h3>
            </div>  
        </header>
    ); 
}

export default Header;