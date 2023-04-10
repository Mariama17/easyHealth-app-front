import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function BackButton(props) {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate('/pathologie', { state: { patientMail: props.patientMail } })}
            style={{ color: 'green', background: 'none', border: 'none' }}
        >
            <i className="fas fa-arrow-left"></i>
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
    );
}

export default BackButton;
