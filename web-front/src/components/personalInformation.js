/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import rest from '../API/rest';

// function PersonalInformation() {
//     const [age, setAge] = useState('Age: 45');
//     const [address, setAddress] = useState('Adresse mail: john.doe@gmail.com');
//     const [phone, setPhone] = useState('Téléphone: 06.66.66.66.29' );
//     const [specialty, setSpecialty] = useState('Spécialité: Cardiologue');

//     const handleAgeChange = (event) => {
//         setAge(event.target.value);
//     };

//     const handleAddressChange = (event) => {
//         setAddress(event.target.value);
//     };

//     const handlePhoneChange = (event) => {
//         setPhone(event.target.value);
//     };

//     const handleSpecialtyChange = (event) => {
//         setSpecialty(event.target.value);
//     };

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//     };

import React from 'react';
import rest from '../API/rest';
class PersonalInformation extends React.Component {
	constructor(props) {
		super(props);
		this.state = { medecinMail: null };
	}

	componentDidMount() {
		this.medecins();
	}

	medecins = async () => {
        try {
            const response = await rest.medecins(this.props.medecinMail);
            console.log('response', response);
            this.setState({ medecinMail: await response.json() });
        } catch (error) {
            alert('Erreur lors de la récupération de vos informations');
        }
    };    

render() {
    const { navigate } = this.props;
    return (
        <div className="cadre">
            <form>
                <div>
                    <div>
                        <input 
                            style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px', fontSize: '15px', width: '235%', backgroundColor: 'rgba(113, 148, 88, 0.12)'}}
                            id="address"
                            placeholder="adresse e-mail"
                            value={this.state.medecinMail != null && this.state.medecinMail.adresseMail}
                            // value={address}
                            // onChange={handleAddressChange}
                        />
                    </div>
                    <div>
                        <input
                            style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px', fontSize: '15px', width: '235%', backgroundColor: 'rgba(113, 148, 88, 0.12)'}}
                            type="phone"
                            id="telephone"
                            placeholder="Téléphone"
                            // value={telephone}
                            // onChange={handleAddressChange}
                        />
                    </div>
                    <div>
                        <input
                            style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px', fontSize: '15px', width: '235%', backgroundColor: 'rgba(113, 148, 88, 0.12)'}}
                            type="tel"
                            id="phone"
                            placeholder="Spécialité"
                            // value={phone}
                            // onChange={handlePhoneChange}
                        />
                    </div>
                    <div>
                        <input
                            style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px', fontSize: '15px', width: '235%', backgroundColor: 'rgba(113, 148, 88, 0.12)'}}
                            type="text"
                            id="specialty"
                            // value={specialty}
                            // onChange={handleSpecialtyChange}
                        />
                    </div>
                    <button style={{marginLeft: '90%'}} type="submit">Modifier</button>
                </div>
            </form>
        </div>
    );
    }
}

export default PersonalInformation;
