import { borderRadius } from '@mui/system';
import React, { useState } from 'react';

function PersonalInformation() {
    const [name, setName] = useState('Malia KANDE');
    const [address, setAddress] = useState('38 rue Molière, Ivry sur Seine');
    const [phone, setPhone] = useState('06.06.06.06.06');
    const [specialty, setSpecialty] = useState('Cardiologue');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleSpecialtyChange = (event) => {
        setSpecialty(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        //Envoyer les informations modifiées au serveur ici
    };

    return (
        <form onSubmit={handleFormSubmit}>
        <div className='allInputs'>
            <div>
                <label htmlFor="name">Nom Prénom</label>
                <input
                    style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px', fontSize: '16px', width: '150%'}}
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <label htmlFor="address">Adresse Postale</label>
                <input
                    style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px', fontSize: '16px', width: '150%'}}
                    type="text"
                    id="address"
                    value={address}
                    onChange={handleAddressChange}
                />
            </div>
            <div>
                <label htmlFor="phone">Téléphone</label>
                <input
                    style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px', fontSize: '16px', width: '150%'}}
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                />
            </div>
            <div>
                <label htmlFor="specialty">Spécialité</label>
                <input
                    style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px', fontSize: '16px', width: '150%'}}
                    type="text"
                    id="specialty"
                    value={specialty}
                    onChange={handleSpecialtyChange}
                />
            </div>
            <button type="submit">Modifier</button>
        </div>
        </form>
    );
}

export default PersonalInformation;
