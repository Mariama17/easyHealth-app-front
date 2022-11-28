/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import image from '../images/image.png';
import easy from '../images/easy.png';
import { useNavigate  } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    return (
        <div>
            <span className='img'>
                <img src={image} width="40%"/>
            </span>
            <span className='imgEasy'>
                <img src={easy} width="70%"/>
            </span>
            <br/><br/><br/><br/><br/><br/><br/>
            <span className='text'>
                <label onClick={() => navigate("/aboutUs")}>
                    <b>
                        Qui sommes nous ? 
                    </b>
                </label>
            </span>
        </div>
    ) 
}

export default Main;