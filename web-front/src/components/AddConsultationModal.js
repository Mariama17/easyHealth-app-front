import React, { useState } from 'react';
import 'moment/locale/fr.js';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Button, Typography, Grid, TextField } from '@mui/material';
import axios from 'axios';


const AddConsultationModal = ({ rdv, onClose }) => {
    const [pathology, setPathology] = useState("");
    const [price, setPrice] = useState(0);
    const [numPrescriptions, setNumPrescriptions] = useState(0);
    const [prescriptions, setPrescriptions] = useState([]);
    const [isPart2Enabled, setIsPart2Enabled] = useState(false);
    const [isPart3Enabled, setIsPart3Enabled] = useState(false);

    const handleSubmitPart1 = async () => {
        const consultationData = {
            date: rdv.dateRdv,
            heure: rdv.heureRdv,
            patientMail: rdv.adresseMailPatient,
            pathologie: pathology,
            prix: price,
        };

        try {
            const response = await axios.post(
                `https://yvandev.fr/easyHealth/consultations/medecin/saisir/${userEmail}`,
                consultationData
            );
            const consultationId = response.data;
            setIsPart2Enabled(true);
            setIsPart3Enabled(true);
        } catch (error) {
            console.error("Erreur lors de l'enregistrement de la consultation", error);
        }
    };

    const handleAddPrescription = () => {
        const newPrescriptions = [...prescriptions, { name: "", description: "" }];
        setPrescriptions(newPrescriptions);
    };

    const handlePrescriptionChange = (index, field, value) => {
        const updatedPrescriptions = [...prescriptions];
        updatedPrescriptions[index][field] = value;
        setPrescriptions(updatedPrescriptions);
    };

    const handleSubmitPart2 = async () => {
        const prescriptionData = {
            dateOrdo: rdv.dateRdv,
            prescriptions: prescriptions.map((p) => ({
                medicamentNom: p.name,
                medicamentDescription: p.description,
                quantite: 1,
            })),
        };

        try {
            await axios.post(
                `https://yvandev.fr/easyHealth/ordonnance/${consultationId}`,
                prescriptionData
            );
        } catch (error) {
            console.error("Erreur lors de l'enregistrement de l'ordonnance", error);
        }
    };

    const handleSubmitPart3 = async () => {
        const followUpData = {
            id: 0,
            description: `Suivi de ${pathology}`,
            etat: "en cours",
        };

        try {
            await axios.post(
                `https://yvandev.fr/easyHealth/suivis/${consultationId}`,
                followUpData
            );
        } catch (error) {
            console.error("Erreur lors de l'enregistrement du suivi", error);
        }
    };

    return (
            <Dialog open onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>Ajouter une consultation</DialogTitle>
            <DialogContent>
            <Grid container spacing={3}>
        {/* Partie 1 */}
        {!isPart2Enabled && (
            <Grid item xs={12}>
            <Typography variant="h6">1. Informations sur la consultation</Typography>
            <TextField
            label="Pathologie"
            value={pathology}
            onChange={(e) => setPathology(e.target.value)}
            fullWidth
            />
            <TextField
            label="Prix"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            type="number"
            />
            <Button
            variant="contained"
            color="primary"
            onClick={handleSubmitPart1}
            fullWidth
            >
            Valider
            </Button>
            </Grid>
            )}
        {/* Partie 2 */}
        {isPart2Enabled && !isPart3Enabled && (
            <Grid item xs={12}>
            <Typography variant="h6">2. Ajouter une ordonnance</Typography>
        {prescriptions.map((prescription, index) => (
            <Grid container spacing={2} key={index}>
            <Grid item xs={6}>
            <TextField
            label="Nom du médicament"
            value={prescription.name}
            onChange={(e) =>
            handlePrescriptionChange(index, "name", e.target.value)
        }
            fullWidth
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
            label="Description"
            value={prescription.description}
            onChange={(e) =>
            handlePrescriptionChange(index, "description", e.target.value)
        }
            fullWidth
            />
            </Grid>
            </Grid>
            ))}
            <Button
            variant="contained"
            color="primary"
            onClick={handleAddPrescription}
            >
            Ajouter un médicament
            </Button>
            <Button
            variant="contained"
            color="primary"
            onClick={handleSubmitPart2}
            fullWidth
            >
            Valider
            </Button>
            </Grid>
            )}

        {/* Partie 3 */}
        {isPart3Enabled && (
            <Grid item xs={12}>
            <Typography variant="h6">3. Créer un suivi</Typography>
            <Button
            variant="contained"
            color="primary"
            onClick={handleSubmitPart3}
            fullWidth
            >
            Valider
            </Button>
            </Grid>
            )}
            </Grid>
            </DialogContent>
            <DialogActions>
            <Button onClick={onClose} color="secondary">
            Annuler
            </Button>
            </DialogActions>
            </Dialog>
            );
        };

export default AddConsultationModal;