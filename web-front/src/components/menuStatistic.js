/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaUser, FaFileAlt, FaStethoscope, FaStar } from 'react-icons/fa';
import { useNavigate  } from "react-router-dom";

function MenuStatistic() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="menu-bar-title">STATISTIQUE</div>
      <ul className="menu-bar-horizontal">
        <li>
          <a onClick={() => navigate("/listPatients")} >
            <FaUser size={15} /> Patients
          </a>
        </li>
        <li>
          <a onClick={() => navigate("/consultation")}>
            <FaStethoscope size={15} /> Consultations
          </a>
        </li>
        <li>
          <a href="#">
            <FaFileAlt size={15} /> Reports
          </a>
        </li>
        <li>
          <a href="#">
            <FaStar size={15} /> Experiences
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MenuStatistic; 
