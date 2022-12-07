import React from 'react';
import Header from './header';
import Footer from './footer';

function AboutUs() {
  return (
    <div>
        <Header/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="aboutUs">
            <p>
                <b>
                    EasyHealth
                </b>
            </p>
            <br/>
            <p>
                Il permet au médecin d’avoir une vision détaillée sur l’évolution de<br/>
                la santé du patient à travers des graphiques (courbes, diagrammes, etc.) <br/>
                qui seront générées autamatiquement, des alertes des rappels, etc.<br/>
                Le medecin pourra également transmettre des recommandations, des bulletins d’analyses, <br/>
                des ordonnaces au patient, qui sera notifié en temps réel.  <br/>
                <br/>
                L’application mobiles sera capable de donner des recomrégime  <br/>
                par exemple), sans intervention du medecin. <br/>
                easyHealth easyHealth easyHealth <br/>
                easyHealth easyHealth easyHealth easyHealth easyHealth easyHealth  <br/>
             
            </p>
        </div>   
        <Footer/>
    </div>
  )
}

export default AboutUs;

