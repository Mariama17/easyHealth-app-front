/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/easy-health.png';
import MenuBar from './menuBar';
import Agenda from './agenda';
import Footer from './footer';
import MyCalendar from './calendar';

function Consultations() {
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
            <span >
                <Agenda />
            </span>
            <span> 
                <MyCalendar />
            </span>
            <Footer/>
        </div>
    )
}

export default Consultations;