import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';

const UserIcon = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="user-icon">
      <FaUser size={25} onClick={toggleMenu} />
      {showMenu && (
        <div className="user-menu">
          <div className="menu-item">
            <FaUser size={15} />
            <span className="menu-label">Mon profil</span>
          </div>
          <div className="menu-item">
            <FaEnvelope size={15} />
            <span className="menu-label">Messages</span>
          </div>
          <div className="menu-item">
            <FaSignOutAlt size={15} />
            <span className="menu-label">Déconnexion</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserIcon;
