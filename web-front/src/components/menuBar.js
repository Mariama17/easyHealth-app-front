import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faFile, faUser, faComments, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FaUser } from 'react-icons/fa';
import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";

function MenuBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  // eslint-disable-next-line no-unused-vars
  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }
  const navigate = useNavigate();
  return (
    <div className="menu-bar">
        <ul className="menu-items">
          <li onClick={() => navigate("/consultation")}><FontAwesomeIcon icon={faCalendarAlt} size="sm" /> Planning & RDV</li>
          <li onClick={() => navigate("/profil")}><FontAwesomeIcon icon={faUser} size="sm" /> Mon compte</li>
          <li onClick={() => navigate("/listPatients")} ><FaUser size={15} /> Mes Patients</li>
          {/* <li><FontAwesomeIcon icon={faComments} size="sm" /> Chat</li> */}
          <li onClick={() => navigate("/login")}><FontAwesomeIcon icon={faPowerOff} size="sm" /> Déconnexion</li>
        </ul>
    </div>
  )
}

export default MenuBar;
