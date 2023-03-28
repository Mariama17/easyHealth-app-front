/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate  } from "react-router-dom";
import { Button} from '@mui/material';
import Footer from './footer'

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
                    placeholder=" adress@mail.fr" 
                /> 
                <br/><br/>
                {/* <Button onClick={() => navigate("/passforgotten")} style={{width:170, height: 40, background: ' #1846a3 ', color: 'white', border: 'none', fontSize: "15px"}}>
                    <b>
                        Réinitialiser
                    </b>
                </Button> */}
                <div className='btnresetPassword'>
                    <Button onClick={() => navigate('/passforgotten')} style={{ width: 150, margin: '1%', background: '#3A6898', color: 'white' }}>
                        <b>
                            Réinitialiser
                        </b>
                    </Button>
                </div>
                <br/><br/>
                <p>     
                    J'ai déja un compte, je veux aller à la 
                    <label 
                        style={{color: 'blue', margin:2, cursor: 'pointer'}}
                        onClick={() => navigate("/login")}>
                        <p>
                            page de conexion
                        </p>
                    </label>
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default Resetpwd;
