/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate  } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import footer1 from '../images/facebook.png';
import footer2 from '../images/twiter.png';
import footer3 from '../images/linkdin.png';

function Resetpwd () {
    const navigate = useNavigate();
    return (
       
            <div className='reset'>
                <div className='information'>
                    <p style={{margin: 30, fontSize: "20px"}}>
                        Veuillez saisir votre email de connexion afin de recevoir le lien de réinitialisation de votre mot de passe par mail.
                    </p>
                </div>
                <div className='resetpwd'>
                    <p style={{ color: "red"}}> 
                        Votre adresse email: *
                    </p>
                    <input 
                        id='login' 
                        class='form-control' 
                        type='text' 
                        style={{ marginTop: "5%", width:"150%", marginLeft:"-25%"}} 
                        placeholder=" user@domain.fr" 
                    /> 
                    <br/><br/>
                    <Button onClick={() => navigate("/passforgotten")} style={{width:170, height: 40, background: ' #1846a3 ', color: 'white', border: 'none', fontSize: "15px"}}>
                        <b>
                            Réinitialiser
                        </b>
                    </Button>
                    <br/><br/>
                    <p>     
                        J'ai déja un compte, je veux aller à la 
                        <label 
                            style={{color: 'blue', margin:2}}
                            onClick={() => navigate("/login")}>
                            <p>
                                page de conexion
                            </p>
                        </label>
                    </p>
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

export default Resetpwd;
