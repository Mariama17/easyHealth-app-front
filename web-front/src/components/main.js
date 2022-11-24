/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import image from '../images/image.png';
import easy from '../images/easy.png';
import courbe from '../images/courbe.png';

const Main = () => {
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
                <label>
                    <b>
                        Qui sommes nous ? 
                    </b>
                </label>
            </span>
            {/* <span style={{marginLeft: "25%"}}>
                <img src={courbe} width="60%"/>
            </span>   */}
        </div>
    ) 
}

export default Main;