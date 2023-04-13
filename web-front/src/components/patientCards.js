import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import UserContext from "./UserContext";
import { useNavigate  } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        padding: '1rem',
    },
    card: {
        maxWidth: 300,
    },
    media: {
        height: 100,
    },
}));

function PatientCards() {
    const classes = useStyles();
    const [patients, setPatients] = useState([]);
    const { userEmail } = useContext(UserContext);

    useEffect(() => {
        axios
            .get('http://localhost:8080/patients/medecin/' + userEmail)
            .then((response) => {
                setPatients(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données : ', error);
            });
    }, [userEmail]);

    const navigate = useNavigate();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                {patients.map((patient) => (
                    <Grid item xs={12} sm={6} md={4} key={patient.idPatient}>
                        <CardActionArea
                            component="a"
                            onClick={() =>
                                navigate("/pathologie", { state: { patientMail: patient.adresseMail } })
                            }

                        >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={`data:image/jpeg;base64,${patient.photoProfil}`}
                                    title={`${patient.prenom} ${patient.nom}`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {patient.prenom} {patient.nom}
                                    </Typography>
                                    {patient.suivis.map((suivi) => (
                                        <Typography key={suivi.id} variant="body2" color="text.secondary">
                                            {suivi.description} - {suivi.etat}
                                        </Typography>
                                    ))}
                                </CardContent>
                            </Card>
                        </CardActionArea>
                        <br/> <br/> <br/> <br/>

                    </Grid>
                ))}
            </Grid>
        </div>

    );
}

export default PatientCards;
