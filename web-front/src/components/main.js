/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import image from '../images/image.png';
import easy from '../images/easy.png';
import { useNavigate  } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    return (
    <div>
        <div><br/><br/><br/><br/><br/><br/></div>
        <div>
            <span className='img'>
                <img src={image} width="40%"/>
            </span>
            <span className='imgEasy'>
                <img src={easy} width="70%"/>
            </span>
            <br/>
            <span className='text'>
                <span onClick={() => navigate("/aboutUs")}>
                    <b>
                        Qui sommes nous ? 
                    </b>
                </span>
            </span>
        </div>
    </div>
    ) 
}

export default Main;