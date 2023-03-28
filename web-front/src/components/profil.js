/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/easy-health.png';
import Footer from './footer';
import MenuBar from './menuBar';
import MyProfile from './myProfile';
import PersonalInformation from './personalInformation'

function ListPatients() {
    return (
        <div className='allProfilPage'>
            <div className='headerProfil'>
                <span style={{position: 'absolute', marginLeft: '45%', top: '0px'}}>
                    <img src={img} width="20%" />
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
            <Footer/>
        </div>
    )
}

export default ListPatients;