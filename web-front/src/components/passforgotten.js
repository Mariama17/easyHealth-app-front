/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import { useNavigate } from "react-router-dom";
import img from '../images/easy-health.png';
import Footer from './footer';
import { Button } from '@mui/material';


function ForgetPassword() {
	const navigate = useNavigate();
	return (
		<div className='allProfilPage'>
            <div className='headerProfil'>
                <span style={{position: 'absolute', marginLeft: '45%', top: '0px'}}>
                    <img src={img} width="20%" />
                </span>
            </div>
            <br/>
			<body>
                <div style={{marginLeft: "2%", color: "red", fontSize: "20px", marginTop: '10%'}}>
                    <p>
                        Veuillez changer votre mot de passe de connexion
                    </p>   
                </div>
                <br/>  
                <div style={{ textAlign: 'center', color: "red", marginTop: '2%'}}>
                    <p> 
                        Mot de passe: *
                    </p>
                    <input 
                        id='login' 
                        class='form-control' 
                        type='password' 
                        style={{ marginTop: "20%", width:"30%", margin:"1%"}} 
                        placeholder=" Mot de passe" 
                    /> 
                    <br/><br/>
                    <p style={{ marginLeft: "1%"}}>
                        Confirmer votre mot de passe: *
                    </p>
				    <input 
                        id='password' 
                        class='form-control' 
                        type='password' 
                        style={{ width:"30%", margin:"1%"}}
                        placeholder=" Confirmer votre mot de passe"
                    />
                </div>
                <br/>
                    <div className='sign_up'>
                        <Button onClick={() => navigate('/login')} style={{ width: 200, background: '#3A6898', color: 'white', marginLeft: '43%' }}>
                            <b>
                                S'inscrire
                            </b>
                        </Button>
                    </div>
                
            </body>
			<Footer/>
		</div>
	);
}
export default ForgetPassword;
