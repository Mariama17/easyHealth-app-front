/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/easy-health.png';
import Button from "react-bootstrap/Button";
// import { useHistory } from "react-router-dom";

function Header () {
    // const history = useHistory();
    return (
        <header>
            <span>
                <img src={img} width="40%" marginTop="5%"/>
            </span>

            <span style={{marginLeft: "30%", marginTop: "5%", alignItems: "center", justifyContent: "space-around"}}>
                <span style={{margin:15}}>
                    <Button>s'inscrire</Button> 
                </span>
                <span>
                    <Button>se connecter</Button>
                </span>
            </span>

            <div style={{ marginLeft: "-15%", marginTop: "10%"}}>
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