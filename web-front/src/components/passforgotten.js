/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate  } from "react-router-dom";
import img from '../images/suivi-medical.png';
import Button from 'react-bootstrap/Button';
import footer1 from '../images/facebook.png';
import footer2 from '../images/twiter.png';
import footer3 from '../images/linkdin.png';

function ForgetPassword () {
    const navigate = useNavigate();
    return (
        <div>
            <div className='headerPassforgotten'>
                <span>
                    <img style={{ marginLeft: "100%"}} src={img} alt='logos' width='40%'/>
                </span>
                <span style={{marginLeft: "45%", alignItems: "center", marginTop: 20}}>
                    <Button onClick={() => navigate("/home")} style={{width:100, height: 30, background: ' #1846a3 ', color: 'white', border: 'none'}}>
                        Accueil
                    </Button>
                </span>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div>
                <p style={{ marginLeft: "2%", color: "red", fontSize: "20px"}}>
                    Veuillez changer votre mot de passe de connexion
                </p>   
            </div> 
            <br/>
            <div className='passwd'>
                <p style={{ marginLeft: "1%", color: "red"}}> 
                    Mot de passe: *
                </p>
                <input 
                    id='login' 
                    class='form-control' 
                    type='password' 
                    style={{ marginTop: "20%", width:"50%", margin:"1%"}} 
                    placeholder=" Mot de passe" 
                /> 
                <br/><br/>
                <p style={{ marginLeft: "1%", color: "red"}}>
                    Confirmer votre mot de passe: *
                </p>
				<input 
                    id='password' 
                    class='form-control' 
                    type='password' 
                    style={{ width:"50%", margin:"1%"}}
                    placeholder=" Confirmer votre mot de passe"
                />
                <br/><br/>
                <Button onClick={() => navigate("/login")} style={{width:170, height: 40, background: ' #dccc25 ', color: 'white', border: 'none', fontSize: "15px"}}>
                    <b>
                        Changer
                    </b>
                </Button>
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

export default ForgetPassword; 