/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/easy-health.png';
import Button from "react-bootstrap/Button";
import { useNavigate  } from "react-router-dom";

function Header () {
    const navigate = useNavigate();
    return (
        <header>
            <span>
                <img src={img} width="40%" marginTop="5%"/>
            </span>
            <span style={{marginLeft: "30%", alignItems: "center", marginTop: 20}}>
                <span style={{margin:15}}>
                    <Button onClick={() => navigate("/inscription")} style={{width:100, height: 30, background: ' #1846a3 ', color: 'white', border: 'none'}}>
                        S'inscrire
                    </Button> 
                </span>
                <span>
                    <Button onClick={() => navigate("/login")} style={{width:100, height: 30, background: ' white ', color: '#1846a3', border: 'none'}}>
                        Se connecter
                    </Button>
                </span>
            </span>
            <div style={{ marginLeft: "-20%", marginTop: "10%"}}>
                <p>
                    <b>
                        Nous proposons un meilleur suivis <br/> 
                        médical à tous nos patients !
                    </b>
                </p>
            </div> 
        </header>
    ); 
}

export default Header;