import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function BackButton() {
  return (
    <Link to="/pathologie" style={{color: 'green'}}>
      <i className="fas fa-arrow-left"></i> 
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
  );
}

export default BackButton;