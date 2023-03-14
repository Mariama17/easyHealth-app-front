/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from './footer';
import img from '../images/easy-health.png';
import Button from "react-bootstrap/Button";
import Form from './form';
import { useNavigate  } from "react-router-dom";

function Sign_up() {
    const navigate = useNavigate();
    return (
        <div>
            <header className='sign'>
                    <span>
                        <img src={img}  width="40%" style={{marginLeft: "105%"}} />
                    </span>
                    <span style={{marginLeft: "30%", alignItems: "center", marginTop: 20}}>
                        <span style={{margin:15}}>
                            <Button onClick={() => navigate("/home")} style={{width:100, height: 30, background: ' #1846a3 ', color: 'white', border: 'none'}}>
                                Accueil
                            </Button> 
                        </span>
                        <span>
                            <Button onClick={() => navigate("/login")} style={{width:100, height: 30, background: ' white ', color: '#1846a3', border: 'none'}}>
                                Se connecter
                            </Button>
                        </span>
                    </span>
                    <div style={{ marginLeft: "-18%", marginTop: "12%"}}>
                        <b>
                            Vous n'avez pas de compte?
                        </b>
                    </div> 
            </header>  
            <Form/>
            <Footer/>
        </div>
    ) 
    
}

export default Sign_up;