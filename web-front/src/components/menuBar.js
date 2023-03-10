import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faFile, faUser, faComments, faPowerOff, faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

function MenuBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  return (
    <div className="menu-bar">
        <ul className="menu-items">
          <li><FontAwesomeIcon icon={faCalendarAlt} size="sm" /> Calendrier</li>
          <li><FontAwesomeIcon icon={faFile} size="sm" /> Documents</li>
          <li><FontAwesomeIcon icon={faUser} size="sm" /> Profil</li>
          <li><FontAwesomeIcon icon={faComments} size="sm" /> Chat</li>
          <li><FontAwesomeIcon icon={faPowerOff} size="sm" /> Déconnexion</li>
        </ul>
      
    </div>
  )
}

export default MenuBar;
