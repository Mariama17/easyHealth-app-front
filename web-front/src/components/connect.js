/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from "react-bootstrap/Button";

function Connect() {
    return (
        <div>
            <div className='loginBody'>
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
								{/* <label style={{ color: 'blue', fontSize: '115%' }} onClick={() => history.push('/forgetPassword')}><FormattedMessage id='connexion.body.ForgetMDP' /></label> */}
								<label style={{ margin: 20, fontSize: '100%' }}>Mot de passe oublié ?</label>
							</b>
						</div>
					</div>
				</div>
                <Button style={{ width: '40%', height: 30 }} >
					<b>
						Me connecter
					</b>
				</Button>
            </div>
        </div>
    )
}

export default Connect



