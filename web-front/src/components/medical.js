import img from "../images/easy-health.png";
import MenuBar from "./menuBar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import PatientCards from "./patientCards";
import Footer from "./footer";
import {React, useContext} from "react";
import BackButton from "./BackButton";
import {useLocation} from "react-router-dom";
import UserContext from "./UserContext";


function Medical(){

    const location = useLocation();
    const patientMail = location.state?.patientMail;
    const { userEmail } = useContext(UserContext);



    return(<div className='allProfilPage'>
        <div className='headerProfil'>
                <span style={{ position: 'absolute', marginLeft: '45%', top: '0px' }}>
                    <img src={img} width="20%" />
                </span>
        </div>
        <br/>
        <div style={{ display: 'flex'}}>
            <MenuBar />
            <BackButton patientMail={patientMail}  />


        </div>

        <Footer />
    </div>);
}
export default Medical;