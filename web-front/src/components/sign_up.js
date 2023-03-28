/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import { useNavigate } from "react-router-dom";
import img from '../images/easy-health.png';
import footer1 from '../images/f.png';
import footer2 from '../images/twiter.png';
import footer3 from '../images/linkdin.png';
import { Button, Grid, Typography, Link } from '@mui/material';


function Sign_up() {
	const navigate = useNavigate();
	return (
		<div>
			<div className='sign'>
                <span style={{position: 'absolute', marginLeft: '42%', top: '0px'}}>
                    <img src={img} width="40%" />
                </span>
                <Grid item style={{marginLeft: '70%', marginTop: '1%'}}>
                    <Button onClick={() => navigate("/aboutUs")}>
                        <Typography component='p' variant='button' color='white' cursor='pointer' fontFamily= 'Work Sans' fontStyle='normal' >
                            <b>
                                Qui nous sommes?
                            </b>
					    </Typography> 
                    </Button>
                    <Button onClick={() => navigate("/contact")}>
                        <Typography component='p' variant='button' color='white' cursor='pointer'  fontFamily= 'Work Sans' fontStyle='normal' >
                            <b>
                                Nous contacter
                            </b>
					    </Typography> 
                    </Button>
                </Grid>  
            </div>
            <br/>
			<body>
                <div style={{color: '#3A6898', marginTop: '20%', textAlign:'center'}}>
                    <h3>
                        Vous n'avez pas de compte?
                    </h3>   
                </div>
                <br/>  
                <div className="Inputs">
                    <input 
                        class = 'form-control2' 
                        type="text" 
                        style={{ width:"40%", margin:"0.5%"}} 
                        placeholder="Nom"
                    /> 
                    <input 
                        class = 'form-control2' 
                        type="text" 
                        style={{ width:"40%", margin:"0.5%"}} 
                        placeholder="Prénom"
                    /> 
                <br/>
                    <input 
                        class = 'form-control2' 
                        type="text" style={{ width:"40%", margin:"0.5%"}} 
                        placeholder="Adresse mail"
                    /> 
                    <input 
                        class = 'form-control2' 
                        type="text" 
                        style={{ width:"40%", margin:"0.5%"}} 
                        placeholder="Téléphone"
                    /> 
                <br/>
                    <input 
                        class = 'form-control2' 
                        type="text" 
                        style={{ width:"40%", margin:"0.5%"}}     
                        placeholder="Mot de passe"
                    /> 
                    <input 
                        class = 'form-control2' 
                        type="text" 
                        style={{ width:"40%", margin:"0.5%"}} 
                        placeholder="Confirmer votre mot de passe"
                    /> 
                    <div className='sign_up'>
                        <Button onClick={() => navigate('/login')} style={{ width: 200, margin: '1%', background: '#3A6898', color: 'white', marginLeft: '32%' }}>
                            <b>
                                S'inscrire
                            </b>
                        </Button>
                    </div>
                </div>
            </body>
			<footer style={{backgroundColor:'#799A4D'}}>
                <Typography variant='body2' color='white' sx={{ mt: 1 }}>
			        {'Copyright © '}
			        <Link color='inherit' href='https://www.linkedin.com'>
			            easyHealth
			        </Link>{' '}
			        {new Date().getFullYear()}
				    {'.'}
			    </Typography> 
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
	);
}
export default Sign_up;
