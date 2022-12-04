/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from "react-bootstrap/Button";
import img from '../images/assistante-medicale.jpg';
import footer1 from '../images/facebook.png';
import footer2 from '../images/twiter.png';
import footer3 from '../images/linkdin.png';
import { useNavigate  } from "react-router-dom";


function Connect() {
    const navigate = useNavigate();
    return (
        <div>
			<span className= 'img_assistante-medicale'>
				<img src={img} width="46%"/>
			</span>
            <span className='loginBody'>
				<p style={{ fontSize: '150%', textAlign: 'center'}}>
					<b>
                        Connectez vous 
                    </b>
				</p>  
                <div classN ame='inputLogin'>
					<input id='login' class='form-control' type='text' placeholder="identifiant" style={{ width:"90%", margin:10 }}/> <br/>
                    <input id='password' class='form-control' type='password' placeholder="mot de passe" style={{ width:"90%", margin:10 }}/>
					<div className='loginForgetMdpDiv'>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<input type='checkbox' name='stayConnect' />
							&nbsp;&nbsp;
								<label for='stayConnect' class='text-primary' className='label'>
									<b>
                                        Restez connecté
                                    </b>
								</label>
                            <b>
								<label onClick={() => navigate('/Resetpwd')} style={{ margin: 20, fontSize: '100%', textDecorationLine : 'underline' }}>
                                    Mot de passe oublié ?
                                </label>
							</b>
						</div>
					</div>
				</div>
                <Button onClick={() => navigate("/login")} style={{width:150, height: 30, background: ' #1846a3 ', color: 'white', border: 'none'}}>
                    Se connecter
                </Button>
            </span>
			<footer className='loginFooter'>
            <p>Politique relatives aux cookies</p>
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

export default Connect



