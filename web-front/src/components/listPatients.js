import { React } from 'react';
import img from '../images/easy-health.png';
import Footer from './footer';
import MenuBar from './menuBar';
import PatientCards from './patientCards';

function ListPatients() {
    return (
        <div className='allProfilPage'>
            <div className='headerProfil'>
                <span style={{ position: 'absolute', marginLeft: '45%', top: '0px' }}>
                    <img src={img} width="20%" />
                </span>
            </div>
            <div style={{ display: 'flex' }}>
                <MenuBar />
                <div style={{ flexGrow: 1 }}>
                    <PatientCards />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ListPatients;
