import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faFile, faUser, faComments, faPowerOff } from '@fortawesome/free-solid-svg-icons'
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
          <li onClick={() => navigate("/consultation")}><FontAwesomeIcon icon={faCalendarAlt} size="sm" /> Calendrier</li>
          <li><FontAwesomeIcon icon={faFile} size="sm" /> Documents</li>
          <li onClick={() => navigate("/profil")}><FontAwesomeIcon icon={faUser} size="sm" /> Profil</li>
          <li><FontAwesomeIcon icon={faComments} size="sm" /> Chat</li>
          <li onClick={() => navigate("/login")}><FontAwesomeIcon icon={faPowerOff} size="sm" /> Déconnexion</li>
        </ul>
    </div>
  )
}

export default MenuBar;
