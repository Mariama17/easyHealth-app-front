/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from './footer';
import img from '../images/easy-health.png';
import Button from "react-bootstrap/Button";
import Form from './form'

function Sign_up() {
    return (
        <div>
            <header>
                <div className='sign'>
                    <span>
                        <img src={img}  width="40%" style={{marginLeft: "100%"}} />
                    </span>
                    <span style={{marginLeft: "30%", marginTop: "5%", alignItems: "center", justifyContent: "space-around"}}>
                        <span>
                            <Button>s'inscrire</Button> 
                        </span>
                        <span style={{margin:30}}>
                            <Button>se connecter</Button>
                        </span>
                    </span>
                    <div style={{ marginLeft: "-15%", marginTop: "12%"}}>
                        <label>
                            <b>
                                Vous n'avez pas de compte?
                            </b>
                        </label>
                    </div> 
                    </div>
            </header>
            <body>
                {/* <Form/> */}
            </body>
            <Footer/>
        </div>
    ) 
    
}

export default Sign_up;