import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img from '../images/assistante-medicale.jpg';
import { Button, Typography } from '@mui/material';
import Footer from './footer';
import UserContext from './UserContext';

function Connect() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { setUserEmail } = useContext(UserContext);



	const handleLogin = async () => {
		try {
			const response = await axios.post('http://localhost:8080/auth/login/MEDECIN', {
				adresseMail: email,
				motDePasse: password,
			});
			console.log(response.data);
			setUserEmail(email);
			navigate('/consultation');
		} catch (error) {
			console.error('Erreur lors de la connexion : ', error);
			// Afficher un message d'erreur ou rediriger l'utilisateur vers une page d'erreur
		}
	};

	return (
		<div style={{ backgroundColor: '#f1f3f5' }}>
      <span className="img_assistante-medicale">
        <img src={img} width="30%" />
      </span>
			<span className="loginBody">
        <div>
          <p style={{ fontSize: '150%', marginTop: '1%' }}>
            <b>Connectez vous</b>
          </p>
        </div>
        <div className="inputLogin">
          <input
			      id="login"
			      className="form-control"
			      type="text"
			      placeholder="adresse e-mail"
			      style={{ width: '60%', margin: 10 }}
			      value={email}
			      onChange={(event) => setEmail(event.target.value)}
		      />
         <input
			    id="password"
			    className="form-control"
			    type="password"
			    placeholder="mot de passe"
			    style={{ width: '60%', margin: 10 }}
			    value={password}
			    onChange={(event) => setPassword(event.target.value)}
		    />
          <label
			      onClick={() => navigate('/Resetpwd')}
			      style={{
				    textDecorationLine: 'underline',
				    cursor: 'pointer',
				    color: 'black',
				    marginLeft: '13%',
			    }}
		    >
            <b>Mot de passe oublié ?</b>
          </label>
        </div>
        <div style={{ marginTop: '10%' }}>
          <Button
			      onClick={handleLogin}
			      style={{
				    width: 150,
				    height: 30,
				    background: ' #1846a3 ',
				    color: 'white',
				    border: 'none',
			    }}
		    >
            <Typography>Se connecter</Typography>
          </Button>
        </div>
      </span>
			<Footer />
		</div>
	);
}

export default Connect;

