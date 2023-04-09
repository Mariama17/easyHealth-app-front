import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}));

function PatientCards() {
    const classes = useStyles();
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/patients/medecin/john.doe@gmail.com')
            .then((response) => {
                setPatients(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données : ', error);
            });
    }, []);

    const handleClick = () => {
        // Navigation vers le composant Dashboard
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                {patients.map((patient) => (
                    <Grid item xs={12} sm={6} md={4} key={patient.idPatient}>
                        <CardActionArea component="a" onClick={handleClick}>
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
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default PatientCards;
