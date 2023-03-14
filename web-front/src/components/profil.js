/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/suivi-medical.png';
import footer1 from '../images/facebook.png';
import footer2 from '../images/twiter.png';
import footer3 from '../images/linkdin.png';
import MenuBar from './menuBar';
import MyProfile from './myProfile';
import PersonalInformation from './personalInformation'

function ListPatients() {
    return (
        <div className='allProfilPage'>
            <div className='headerPrincipal'>
                <span>
                    <img src={img} alt='logos' width='35%' style={{ marginTop: '-5%'}}/>
                </span> 
            </div>
            <br/>
            <span>  
                <MenuBar />
            </span>
            <span>
                <MyProfile />
            </span>
            <span>
                <PersonalInformation />
            </span>
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

export default ListPatients;