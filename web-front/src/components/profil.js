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
    const { userEmail, updateUserEmail } = useContext(UserContext); // Ajoutez updateUserEmail ici
    const [medecinData, setMedecinData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8080/medecins/${userEmail}`);
            setMedecinData(response.data);
        };

        async function handleSubmit(event, updatedData) {
            event.preventDefault();

            const formData = new FormData();
            if (updatedData.photo) formData.append("file", updatedData.photo);
            if (updatedData.adresseMail) formData.append("adresseMail", updatedData.adresseMail);
            if (updatedData.numeroTelephone) formData.append("numeroTelephone", updatedData.numeroTelephone);

            try {
                const response = await axios.put(`http://localhost:8080/medecins/${userEmail}/update`, formData);
                setMedecinData(response.data);
            } catch (error) {
                console.error("Error updating medecin data:", error);
            }
        }


        fetchData();
    }, []);

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
                console.log(userEmail)// Mettez à jour le contexte si l'adresse e-mail est modifiée
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour des informations du médecin:', error);
        }
    };

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
            <MyProfile nom="a" photo={medecinData && medecinData.photoProfil} onUpdate={updateMedecin} />
        </span>
            <span>
            <PersonalInformation medecinData={medecinData} medecinMail={userEmail} onUpdate={updateMedecin} />
        </span>
            <Footer/>
        </div>
    )
}

export default ListPatients;