/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from "react-bootstrap/Button";
import img from '../images/easy-health.png';
import Connect from './connect';

function Login() {
    return (
        <div>
            <header className='login'>
                    <span>
                        <img src={img}  width="40%" style={{marginLeft: "110%"}} />
                    </span>
                    <span style={{marginLeft: "30%", alignItems: "center", marginTop: 20}}>
                        <span style={{margin:15}}>
                            <Button style={{width:200, height: 30, background: ' #1846a3 ', color: 'white', border: 'none'}}>
                                Vous n'avez pas de compte ?
                            </Button> 
                        </span>
                        <span>
                            <Button style={{width:100, height: 30, background: ' white ', color: '#1846a3', border: 'none'}}>
                                Accueil
                            </Button>
                        </span>
                    </span>
            </header>
            <Connect/>
        </div>
    )
}

export default Login;