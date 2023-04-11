/* eslint-disable jsx-a11y/alt-text */
import React, {useContext, useState, useEffect} from 'react';
import img from '../images/easy-health.png';
import Footer from './footer';
import MenuBar from './menuBar';
import MyProfile from './myProfile';
import PersonalInformation from './personalInformation'
import UserContext from "./UserContext";
import { UserProvider } from "./UserContext"
import axios from 'axios';

function ListPatients() {
    const { userEmail, updateUserEmail } = useContext(UserContext);
    const [medecinData, setMedecinData] = useState(null);
    const [updated, setUpdated] = useState(false);
    const [medecinNom, setMedecinNom] = useState("");

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:8080/medecins/${userEmail}`);
        setMedecinData(response.data);
    };


    useEffect(() => {

        fetchData();
    }, [userEmail]);


    const updateMedecin = async (updatedData) => {
        const formData = new FormData();
        for (const key in updatedData) {
            formData.append(key, updatedData[key]);
        }

        try {
            const response = await axios.put(`http://localhost:8080/medecins/${userEmail}/update`, formData);
            setMedecinData(response.data);
            if (updatedData.adresseMail) {
                updateUserEmail(updatedData.adresseMail);
            }
            await fetchData();
        } catch (error) {
            console.error('Erreur lors de la mise à jour des informations du médecin:', error);
        }
    };

    const updateUserEmailWithUpdatedData = (updatedData) => {
        updateMedecin(updatedData);
    };

    console.log(medecinData);

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
            <MyProfile nom={medecinData} photo={medecinData && medecinData.photoProfil} onUpdate={updateUserEmailWithUpdatedData} />
        </span>
            <span>
            <PersonalInformation medecinData={medecinData} medecinMail={userEmail} onUpdate={updateUserEmailWithUpdatedData} />
        </span>
            <Footer/>
        </div>
    )
}

export default ListPatients;
