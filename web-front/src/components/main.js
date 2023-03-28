/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import image from '../images/image.png';


const Main = () => {
    return (
        <div className='imghome'>
            <img src={image} style={{width: '100%', top: '30%', maxWidth: 500, display: 'flex', position: 'absolute', marginLeft:'15%'}} alt="image"/>
        </div>
    ) 
}

export default Main;