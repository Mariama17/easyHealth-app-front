import React from 'react';
import Button from "react-bootstrap/Button";

function Form() {
  return (
    <div>
        <div className="Input">
            <input 
              class = 'form-control' 
              type="text" 
              style={{ width:"35%", margin:"0.5%"}} 
              placeholder="Nom"
              /> 
              <input 
                class = 'form-control' 
                type="text" 
                style={{ width:"35%", margin:"0.5%"}} 
                placeholder="Prénom"
              /> 
              <br/><br/>
              <input 
                class = 'form-control' 
                type="text" style={{ width:"35%", margin:"0.5%"}} 
                placeholder="Adresse mail"
              /> 
              <input 
                class = 'form-control' 
                type="text" 
                style={{ width:"35%", margin:"0.5%"}} 
                placeholder="Téléphone"
              /> 
              <br/><br/>
              <input 
                class = 'form-control' 
                type="text" 
                style={{ width:"35%", margin:"0.5%"}} 
                placeholder="Mot de passe"
              /> 
              <input 
                class = 'form-control' 
                type="text" 
                style={{ width:"35%", margin:"0.5%"}} 
                placeholder="Confirmer votre mot de passe"
              /> 
              </div>
              <br/>
              <div className="sign_up">
                  <Button style={{width:200, height: 40, background: ' #1846a3 ', color: 'white'}}>
                      <b>
                          S'inscrire
                      </b>
                  </Button>
              </div>
      </div>
  )
}
export default Form;