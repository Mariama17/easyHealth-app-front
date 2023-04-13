/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import emailjs from 'emailjs-com';
import Footer from './footer';
import img from '../images/easy-health.png';
import Maps from './maps';
import Line  from '../images/Line9.png';
import { useNavigate  } from "react-router-dom";
import { Button, Grid, Typography } from '@mui/material';

function sendEmail(e) {
	e.preventDefault();
	emailjs.sendForm('service_ncpf51d', 'template_ughw7vi', e.target, 'flvUG-G8i-m6vu26X').then(
		(result) => {
			console.log('sucess : ', result.text);
			alert('Votre message a bien été envoyé');
		},
		(error) => {
			console.log('error : ', error.text);
		}
	);
} 

function Contact() {
	const navigate = useNavigate();
	return (
		<div>
			<header>
            <span style={{position: 'absolute', marginLeft: '50px', top: '0px'}}>
                <img src={img} width="50%" />
            </span>
            <Grid item style={{marginLeft: '45%', marginTop: '1%'}}>
                <Button onClick={() => navigate("/aboutUs")}>
                    <Typography component='p' variant='button' color='white' cursor='pointer' fontFamily= 'Work Sans' fontStyle='normal' marginTop='-5%'>
                        <b>Qui nous sommes?</b>
					</Typography> 
                </Button>
                <img src={Line}/>
                <Button onClick={() => navigate("/home")}>
                    <Typography component='p' variant='button' color='white' cursor='pointer'  fontFamily= 'Work Sans' fontStyle='normal' marginTop='-5.5%'>
                        <b>PAGE D'ACCUEIL</b>
					</Typography> 
                </Button>
                <img src={Line} style={{marginRight: '2%'}}/>
                <Button onClick={() => navigate("/admin")} style={{width:150, height: 30, background: ' #1846a3 ', color: 'white', border: 'none', marginRight: 20, fontFamily: 'Work Sans', fontStyle:'normal', mixBlendMode: 'normal', marginTop:'-2%'}}>
                    <b>
                        Admin
                    </b>
                </Button> 
                <Button onClick={() => navigate("/login")} style={{width:150, height: 30, background: ' white ', color: '#1846a3', border: 'none', fontFamily: 'Work Sans', fontStyle:'normal', marginTop:'-2%'}}>
                    <b>
                        Se connecter
                    </b>
                </Button>
            </Grid>
            <div style={{ marginLeft: "50%", marginTop: "10%", color: "white", textAlign: 'center' }}>
                <h3>
                    Votre santé en toute simplicité avec <br/> 
                            easyHealth !
                </h3>
            </div>  
        </header>
            <br/>
			<body>
                <div className='TitleContact'>
                    <h3>
                        N'hésitez pas à nous contacter
                    </h3>   
                </div>
                <br/>  
                <div className="Inputs">
                    <form className='contact-form' onSubmit={(e) => sendEmail(e)}>                        
                        <input 
                            class = 'form-control2' 
                            type="text" 
                            name='nom'
                            style={{ width:"50%", margin:"0.5%", marginLeft: '16%'}} 
                            placeholder="Nom"
                        /> 
                        <input 
                            class = 'form-control2' 
                            type="text" 
                            name='Prenom'
                            style={{ width:"50%", margin:"0.5%", marginLeft: '16%'}} 
                            placeholder="Prénom"
                        /> 
                    <br/>
                        <input 
                            class = 'form-control2' 
                            type="text" 
                            name='email'
                            style={{ width:"50%", margin:"0.5%", marginLeft: '16%'}} 
                            placeholder="Adresse mail"
                        /> 
                        <input 
                            class = 'form-control2' 
                            type="text" 
                            style={{ width:"50%", margin:"0.5%", marginLeft: '16%'}} 
                            placeholder="Téléphone"
                            name='phone'
                        /> 
                    <br/>
                        <input 
                            class = 'form-control2' 
                            type="text" 
                            name='message'
                            style={{ width:"50%", height: 100, margin:"0.5%", marginLeft: '16%'}}     
                            placeholder="Message"
                        /> 
                    <br/>
                    <br/>
                        <div className='btnSend'>
                            <Button style={{ width: 100, height: 30, background: ' #1846a3 ', color: 'white', border: 'none', marginLeft: '360px'}}>
                                <b>
                                    Envoyer
                                </b>
                            </Button>
                        </div>
                    </form>
                </div>
            <div>
                <h3>
                    Nous rendre visite ?
                </h3>
            </div>
            <br />
            <Maps />
            </body>
			<Footer />
		</div>
	);
}
export default Contact;
