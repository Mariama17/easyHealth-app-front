/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/assistante-medicale.jpg';
import { useNavigate } from "react-router-dom";
import { Button, Typography } from '@mui/material';
import Footer from './footer'

function Connect() {
    const navigate = useNavigate();
    return (
        <div style={{backgroundColor: '#f1f3f5'}}>
			<span className= 'img_assistante-medicale'>
				<img src={img} width="30%"/>
			</span>
            <span className='loginBody'>
				<div>
					<p style={{ fontSize: '150%', marginTop: '1%'}}>
						<b>
                        	Connectez vous 
                    	</b>
					</p> 
				</div> 
                <div className='inputLogin'>
					<input 
						id='login' 
						class='form-control' 
						type='text' 
						placeholder="adresse e-mail" 
						style={{ width:"60%", margin:10 }}
					/> 
                    <input 
						id='password' 
						class='form-control' 
						type='password' 
						placeholder="mot de passe" 
						style={{ width:"60%", margin:10 }}
					/>
					<label onClick={() => navigate('/Resetpwd')} style={{ textDecorationLine : 'underline', cursor: 'pointer', color: 'black', marginLeft: '13%'}}>
                        <b>
							Mot de passe oublié ?
						</b>
                    </label>
				</div>
				<div style={{marginTop: '10%'}}>
                	<Button onClick={() => navigate("/consultation")} style={{width:150, height: 30, background: ' #1846a3 ', color: 'white', border: 'none'}}>
                    	<Typography>
                        	Se connecter
                    	</Typography>
                	</Button>
				</div>
            </span>
			<Footer/>
        </div>
    )
}

export default Connect
