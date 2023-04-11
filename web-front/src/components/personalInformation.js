import React, { useState, useEffect } from 'react';
import rest from '../API/rest';

function PersonalInformation(props) {
    const [formData, setFormData] = useState({
        adresseMail: '',
        numeroTelephone: '',
        specialite: '',
    });

    useEffect(() => {
        if (props.medecinData) {
            setFormData({
                adresseMail: props.medecinData.adresseMail,
                numeroTelephone: props.medecinData.numeroTelephone,
                specialite: props.medecinData.specialite,
            });
        }
    }, [props.medecinData]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (props.onUpdate) {
            props.onUpdate(formData);
        }
    };

    return (
        <div className="cadre">
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <input
                            style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '30px', fontSize: '15px', width: '235%', backgroundColor: 'rgba(113, 148, 88, 0.12)'}}
                            id="address"
                            placeholder="adresse e-mail"
                            name="adresseMail"
                            onChange={handleInputChange}
                            value={formData.adresseMail}
                        />
                    </div>
                    <div>
                        <input
                            style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '30px', fontSize: '15px', width: '235%', backgroundColor: 'rgba(113, 148, 88, 0.12)'}}
                            type="phone"
                            id="telephone"
                            placeholder="Téléphone"
                            name="numeroTelephone"
                            onChange={handleInputChange}
                            value={formData.numeroTelephone}
                        />
                    </div>
                    <div>
                        <input
                            style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '30px', fontSize: '15px', width: '235%', backgroundColor: 'rgba(113, 148, 88, 0.12)'}}
                            type="text"
                            id="specialty"
                            name="specialite"
                            onChange={handleInputChange}
                            value={formData.specialite}
                        />
                    </div>
                    <button style={{ marginLeft: '90%' }} type="submit">
                        Modifier
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PersonalInformation;
