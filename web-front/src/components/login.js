/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/easy-health.png';
import Connect from './connect';
import { useNavigate  } from "react-router-dom";
import { Button } from '@mui/material';
import { Grid, Typography } from '@mui/material';

function Login() {
    const navigate = useNavigate();
    return (
        <div className='headerLoginPage'>
            <span style={{position: 'absolute', marginLeft: '42%', top: '0px'}}>
                <img src={img} width="30%" />
            </span>
                <Grid item style={{marginLeft: '70%', marginTop: '1%'}}>
                    <Button onClick={() => navigate("/aboutUs")}>
                        <Typography component='p' variant='button' color='white' cursor='pointer' fontFamily= 'Work Sans' fontStyle='normal' >
                            <b>
                                Qui nous sommes?
                            </b>
					    </Typography> 
                    </Button>
                    <Button onClick={() => navigate("/contact")}>
                        <Typography component='p' variant='button' color='white' cursor='pointer'  fontFamily= 'Work Sans' fontStyle='normal' >
                            <b>
                                Nous contacter
                            </b>
					    </Typography> 
                    </Button>
                </Grid> 
        <Connect/>
        </div>
    )
}

export default Login;