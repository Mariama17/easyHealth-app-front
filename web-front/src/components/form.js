import React from 'react';
import Button from "react-bootstrap/Button";

function Form() {
  return (
    <div>
        <div className='formulaire'>
            <div className="createAccount">
                <input class = 'form-control' type="text" style={{ width:"40%", height:30, margin:"0.5%"}} placeholder="Nom"/> 
                <input class = 'form-control' type="text" style={{ width:"40%", height:30, margin:"0.5%"}} placeholder="Prénom"/> 
                <br/>
                <br/>
                <input class = 'form-control' type="text" style={{ width:"80%", height:40, marginLeft:5}} placeholder="Adresse mail"/> 
                <br/>
                <br/>
                <input class = 'form-control' type="text" style={{ width:"40%", height:30, margin:"0.5%"}} placeholder="Mot de passe"/> 
                <input class = 'form-control' type="text" style={{ width:"40%", height:30, margin:"0.5%"}} placeholder="Confirmer votre mot de passe"/> 
                <Button style={{width:150, height:30, margin: 20}}>
                    <b>
                        S'inscrire
                    </b>
                </Button>
            </div>
        </div>
    </div>
  )
}
export default Form;