/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from "react-bootstrap/Button";
import img from '../images/easy-health.png';
import Connect from './connect';
import Footer from './footer';

function Login() {
    return (
        <div>
            <header  className='login'>
                    <span>
                        <img src={img}  width="40%" style={{marginLeft: "100%"}} />
                    </span>
                    <span style={{marginLeft: "30%", alignItems: "center", justifyContent: "space-around"}}>
                        <span>
                            <Button>
                                Vous n'avez pas de compte ?
                            </Button> 
                        </span>
                        <span style={{margin:30}}>
                            <Button>
                                Accueil
                            </Button>
                        </span>
                    </span> 
            </header>
            <Connect/>
            {/* <Footer/> */}
        </div>
    )
}

export default Login;