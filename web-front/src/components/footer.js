/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import footer1 from '../images/f.png';
import footer2 from '../images/logo-de-twitter.jpg';
import footer3 from '../images/linkedin.png';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const Footer = () => {
    return (
        <footer>
             <Typography variant='body2' color='white' sx={{ mt: 1 }}>
			    {'Copyright © '}
			    <Link color='inherit' href='https://www.linkedin.com'>
			        easyHealth
			    </Link>{' '}
			    {new Date().getFullYear()}
				{'.'}
			</Typography> 
            <a
                href="https://www.facebook.com"
                title="Rejoignez-nous sur Facebook"
            >
                <img src={footer1} width="30px"/>
            </a>

            <a
                href="https://twitter.com/"
                title="Rejoignez-nous sur Twitter"
            >
                <img src={footer2} width="30px"/>
            </a>

            <a
                href="https://www.linkedin.com"
                title="Rejoignez-nous sur LinkedIn"
            >
                <img src={footer3} width="30px"/>
            </a>
        </footer>
    )
}

export default Footer;