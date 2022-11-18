/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import footer1 from '../images/facebook.png';
import footer2 from '../images/twiter.png';
import footer3 from '../images/linkdin.png';

const Footer = () => {
    return (
        <footer>
            <p>Politique relatives aux cookies</p>
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