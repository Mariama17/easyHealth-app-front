import { borderRadius } from '@mui/system';
import React, { useState } from 'react';

function PersonalInformation() {
    const [age, setAge] = useState('Age: 45');
    const [address, setAddress] = useState('Adresse mail: john.doe@gmail.com');
    const [phone, setPhone] = useState('Téléphone: 06.66.66.66.29' );
    const [specialty, setSpecialty] = useState('Spécialité: Cardiologue');

    const handleAgeChange = (event) => {
        setAge(event.target.value);
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
    };

    return (
        <div className="cadre">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <div >
                        <input 
                            style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px', fontSize: '15px', width: '235%', backgroundColor: 'rgba(113, 148, 88, 0.12)'}}
                            type="age"
                            id="age"
                            value={age}
                            onChange={handleAgeChange}
                        />
                        </div>
                    <div>
                        <input
                            style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px', fontSize: '15px', width: '235%', backgroundColor: 'rgba(113, 148, 88, 0.12)'}}
                            type="text"
                            id="address"
                            value={address}
                            onChange={handleAddressChange}
                        />
                    </div>
                    <div>
                        <input
                            style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px', fontSize: '15px', width: '235%', backgroundColor: 'rgba(113, 148, 88, 0.12)'}}
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </div>
                    <div>
                        <input
                            style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px', fontSize: '15px', width: '235%', backgroundColor: 'rgba(113, 148, 88, 0.12)'}}
                            type="text"
                            id="specialty"
                            value={specialty}
                            onChange={handleSpecialtyChange}
                        />
                    </div>
                    <button style={{marginLeft: '90%'}} type="submit">Modifier</button>
                </div>
            </form>
        </div>
    );
}

export default PersonalInformation;
