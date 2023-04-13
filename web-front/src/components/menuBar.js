import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt,  faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FaUser } from 'react-icons/fa';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function MenuBar() {
  const [selectedItem, setSelectedItem] = useState('/consultation');
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (path) => {
    setSelectedItem(path);
    navigate(path);
  };

  return (
    <div className="menu-bar">
      <ul className="menu-items">
        <li
          style={selectedItem === '/consultation' || location.pathname === '/' ? { backgroundColor: '#3A6898', color: 'white' } : {}}
          onClick={() => handleItemClick('/consultation')}
        >
          <FontAwesomeIcon icon={faCalendarAlt} size="sm" /> Planning & RDV
        </li>
        <li
          style={selectedItem === '/profil' ? { backgroundColor: '#3A6898', color: 'white' } : {}}
          onClick={() => handleItemClick('/profil')}
        >
          <FontAwesomeIcon icon={faUser} size="sm" /> Mon compte
        </li>
        <li
          style={selectedItem === '/listPatients' ? { backgroundColor: '#3A6898', color: 'white' } : {}}
          onClick={() => handleItemClick('/listPatients')}
        >
          <FaUser size={15} /> Mes Patients
        </li>
        <li
          style={selectedItem === '/login' ? { backgroundColor: '#3A6898', color: 'white' } : {}}
          onClick={() => handleItemClick('/login')}
        >
          <FontAwesomeIcon icon={faPowerOff} size="sm" /> Déconnexion
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;