import React, { useState } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const MedecinModal = ({ onClose, rdv, open, userEmail }) => {
    const [pathologie, setPathologie] = useState("");
    const [prix, setPrix] = useState(0);
    const [part1Done, setPart1Done] = useState(false);
    const [part2Done, setPart2Done] = useState(false);
    const [prescriptions, setPrescriptions] = useState([]);
    const [consultationId, setConsultationId] = useState(null);

    const handlePart1Submit = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8080/consultations/medecin/saisir/"+ userEmail,
                {
                    date: rdv.dateRdv,
                    heure: rdv.heureRdv,
                    patientMail: rdv.adresseMailPatient,
                    pathologie,
                    prix,
                }
            );

            setConsultationId(response.data);
            setPart1Done(true);
        } catch (error) {
            console.error("Erreur lors de la requête Alpha:", error);
        }
    };

    const handlePart2Submit = async () => {
        console.log(prescriptions);
        console.log(rdv.dateRdv);
        try {
            await axios.post(`http://localhost:8080/ordonnance/${consultationId}`, {
                dateOrdo: rdv.dateRdv,
                prescriptions,
            });

            setPart2Done(true);
        } catch (error) {
            console.error("Erreur lors de la requête ordonnance:", error);
        }
    };

    const handlePart3Submit = async () => {
        try {
            await axios.post(`http://localhost:8080/suivis/${consultationId}`, {
                id: 0,
                description: `Suivi de ${pathologie}`,
                etat: "en cours",
            });

            onClose();
        } catch (error) {
            console.error("Erreur lors de la requête suivis:", error);
        }
    };


    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Saisir une consultation</DialogTitle>
            <DialogContent>
                {/* Partie 1 */}
                <div>
                    <h3>Partie 1</h3>
                    <TextField
                        label="Pathologie"
                        value={pathologie}
                        onChange={(e) => setPathologie(e.target.value)}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Prix"
                        type="number"
                        value={prix}
                        onChange={(e) => setPrix(e.target.value)}
                        fullWidth
                        margin="normal"
                    />

                    <Button onClick={handlePart1Submit} variant="contained">
                        Enregistrer
                    </Button>
                </div>

                {/* Partie 2 */}
                {part1Done && (
                    <>
                        <h3>Partie 2</h3>
                        {prescriptions.map((prescription, index) => (
                            <div key={index}>
                                <TextField
                                    label="Nom du médicament"
                                    value={prescription.medicamentNom}
                                    onChange={(e) =>
                                        setPrescriptions((prevState) => {
                                            const newState = [...prevState];
                                            newState[index].medicamentNom = e.target.value;
                                            return newState;
                                        })
                                    }
                                    fullWidth
                                    margin="normal"
                                />

                                <TextField
                                    label="Description du médicament"
                                    value={prescription.medicamentDescription}
                                    onChange={(e) =>
                                        setPrescriptions((prevState) => {
                                            const newState = [...prevState];
                                            newState[index].medicamentDescription = e.target.value;
                                            return newState;
                                        })
                                    }
                                    fullWidth
                                    margin="normal"
                                />

                                <TextField
                                    label="Quantite"
                                     value={prescription.quantite}
                                onChange={(e) =>
                                setPrescriptions((prevSate) => {
                                    const newState = [...prevSate];
                                    newState[index].quantite = e.target.value;
                                    return newState;
                                })
                            }
                                    fullWidth
                                    margin="normal"
                                    />

                            </div>
                        ))}

                        <Button
                            onClick={() =>
                                setPrescriptions((prevState) => [
                                    ...prevState,
                                    { medicamentNom: "", medicamentDescription: "", quantite: 1 },
                                ])
                            }
                            variant="contained"
                        >
                            Ajouter une prescription
                        </Button>

                        <Button onClick={handlePart2Submit} variant="contained">
                            Enregistrer les prescriptions
                        </Button>
                    </>
                )}

                {/* Partie 3 */}
                {part1Done && part2Done && (
                    <>
                        <h3>Partie 3</h3>
                        <Button onClick={handlePart3Submit} variant="contained">
                            Suivre le patient
                        </Button>
                    </>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Fermer
                </Button>
            </DialogActions>
        </Dialog>
    );
};
export default MedecinModal;