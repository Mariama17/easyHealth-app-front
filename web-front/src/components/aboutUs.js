/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import doctorImage from '../images/photo.jpg';
import image from '../images/Rectangle.png';
import logo from '../images/easy.png';
import img from '../images/easy-health.png';
import Footer from './footer';
import { useNavigate  } from "react-router-dom";
import Line  from '../images/Line9.png';
import { Grid, Typography, Button } from '@mui/material';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #2b2d42;
  margin-bottom: 30px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #2b2d42;
  margin-bottom: 20px;
`;

const Para = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #2b2d42;
  margin-bottom: 15px;
  width: 80%
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
  margin: 10px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: #2b2d42;
  font-size: 24px;
`;

const ContactText = styled.div`
  font-size: 20px;
  color: #2b2d42;
`;

const AboutUs = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='headerAboutUs'>
            <span style={{position: 'absolute', marginLeft: '5%', top: '0px'}}>
                <img src={img} width="25%" />
            </span>
            <Grid item style={{marginLeft: '45%', marginTop: '1%'}}>
                <Button onClick={() => navigate("/home")}>
                    <Typography component='p' variant='button' color='white' cursor='pointer' fontFamily= 'Work Sans' fontStyle='normal' marginTop='-5%'>
                        <b>PAGE D'ACCUEIL</b>
					</Typography> 
                </Button>
                <img src={Line}/>
                <Button onClick={() => navigate("/contact")}>
                    <Typography component='p' variant='button' color='white' cursor='pointer'  fontFamily= 'Work Sans' fontStyle='normal' marginTop='-5.5%'>
                        <b>Nous contacter</b>
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
        </div><br/><br/><br/><br/><br/><br/><br/>
        <AboutContainer >
            <Title>À propos de Nous</Title>
            <Subtitle>Easyhealth</Subtitle>
            <Image src={logo} alt="logo" />
            <Para>
                Les médecins pourront consulter des graphiques détaillés pour suivre l'évolution de 
                la santé de leurs patients, pouvoir s'envoyer des messages, et transmettre des recommandations et des ordonnances en temps réel. 
        </Para>
        <ImageContainer>
            <Image src={doctorImage} alt="Docteur" />
            <Image src={image} alt="image" />
        </ImageContainer>
        <Subtitle>
            Joignez-nous
        </Subtitle>
        <ContactContainer>    
            <ContactIcon><FaPhoneAlt /></ContactIcon>
            <ContactText>01 23 45 67 89</ContactText>
        </ContactContainer>
        <ContactContainer>
            <ContactIcon><FaEnvelope /></ContactIcon>
            <ContactText>easyhelph@outlook.fr</ContactText>
        </ContactContainer>
        <ContactContainer>
            <ContactIcon><FaMapMarkerAlt /></ContactIcon>
            <ContactText>12 rue de la Santé, 75013 Paris</ContactText>
        </ContactContainer>
    </AboutContainer>
    <br/>
    <Footer/>
    </div>
  );
};

export default AboutUs;
