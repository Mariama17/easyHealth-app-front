import React, { useState, useEffect } from 'react';
import { ReactAgenda, guid } from 'react-agenda';
import 'moment/locale/fr.js';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import MedecinModal from "./medecinModal"









const colors = {
    'color-1': 'rgba(102, 195, 131 , 1)',
    'color-2': 'rgba(242, 177, 52, 1)',
    'color-3': 'rgba(235, 85, 59, 1)',
};

const now = new Date();

const Agenda = ({ userEmail }) => {
    const [editingRdv, setEditingRdv] = useState(null);
    const [selected, setSelected] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);
    const [selectedRdv, setSelectedRdv] = useState(null);
    const [showModal2, setShowModal2] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/rdv/medecin/" + userEmail);
                const data = response.data.map(rdv => {
                    const startDateTime = new Date(rdv.dateRdv + "T" + rdv.heureRdv);
                    const [hours, minutes] = rdv.duree.split(':');
                    const endDateTime = new Date(startDateTime.getTime() + (hours * 60 + parseInt(minutes)) * 60000);

                    return {
                        _id: rdv.idRdv,
                        name: (
                            <>
            <span>
              Durée du RDV: {rdv.duree} - Email: {rdv.adresseMailPatient} - Téléphone: {rdv.numeroTelephonePatient}
            </span>
                                <DeleteIcon
                                    style={{ cursor: "pointer", marginLeft: "5px", color: "red" }}
                                    onClick={() => handleDeleteClick({ startDateTime })}
                                />
                                <AddIcon
                                    style={{ cursor: "pointer", marginLeft: "5px", color: "blue" }}
                                    onClick={() => handleAddClick(rdv)}
                                />
                            </>
                        ),
                        startDateTime: startDateTime,
                        endDateTime: endDateTime,
                        classes: 'color-1',
                    };
                });
                setItems(data);

            } catch (error) {
                console.error('Erreur lors de la récupération des données', error);
            }
        };

        fetchData();
    }, [userEmail]);

    useEffect(() => {
        fetchDataAndUpdateItems();
    }, [userEmail]);


    const fetchDataAndUpdateItems = async () => {
        try {
            const response = await axios.get("http://localhost:8080/rdv/medecin/" + userEmail);
            const data = response.data.map(rdv => {
                const startDateTime = new Date(rdv.dateRdv + "T" + rdv.heureRdv);
                const [hours, minutes] = rdv.duree.split(':');
                const endDateTime = new Date(startDateTime.getTime() + (hours * 60 + parseInt(minutes)) * 60000);
                return {
                    _id: rdv.idRdv,
                    name: (
                        <>
                        <span>
                            Durée du RDV: {rdv.duree} - Email: {rdv.adresseMailPatient} - Téléphone: {rdv.numeroTelephonePatient}
                        </span>
                            <DeleteIcon
                                style={{ cursor: "pointer", marginLeft: "5px", color: "red" }}
                                onClick={() => handleDeleteClick({ startDateTime })}
                            />
                            <AddIcon
                                style={{ cursor: "pointer", marginLeft: "5px", color: "blue" }}
                                onClick={() => handleAddClick(rdv)}
                            />
                        </>
                    ),
                    startDateTime: startDateTime,
                    endDateTime: endDateTime,
                    classes: 'color-1',
                };
            });
            setItems(data);

        } catch (error) {
            console.error('Erreur lors de la récupération des données', error);
        }
    };

    const handleAddClick = (rdv) => {
        console.log(rdv);
        setShowModal2(true);
        setSelectedRdv(rdv);
    };



    const handleDeleteClick = async (item) => {
        try {
            const year = item.startDateTime.getFullYear();
            const month = String(item.startDateTime.getMonth() + 1).padStart(2, '0');
            const day = String(item.startDateTime.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;

            const hours = String(item.startDateTime.getHours()).padStart(2, '0');
            const minutes = String(item.startDateTime.getMinutes()).padStart(2, '0');
            const seconds = String(item.startDateTime.getSeconds()).padStart(2, '0');
            const formattedTime = `${hours}:${minutes}:${seconds}`;

            const response = await axios.get(`http://localhost:8080/rdv/id/${formattedDate}/${formattedTime}/${userEmail}`);
            const rdvData = response.data;
            const rdvId = rdvData; // Récupère l'ID du RDV.

            // Supprime le RDV en utilisant l'ID récupéré.
            await axios.delete(`http://localhost:8080/rdv/${rdvId}`);

            // Mettre à jour l'agenda après la suppression du RDV.
            const newItems = items.filter(i => i.startDateTime !== item.startDateTime);
            setItems(newItems);
        } catch (error) {
            console.error('Erreur lors de la suppression du RDV', error);
        }

        fetchDataAndUpdateItems();
    };


    const handleEditClick = async (item) => {
        try {

            // Get the formatted date and time
            const year = item.startDateTime.getFullYear();
            const month = String(item.startDateTime.getMonth() + 1).padStart(2, '0');
            const day = String(item.startDateTime.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;

            const hours = String(item.startDateTime.getHours()).padStart(2, '0');
            const minutes = String(item.startDateTime.getMinutes()).padStart(2, '0');
            const seconds = String(item.startDateTime.getSeconds()).padStart(2, '0');
            const formattedTime = `${hours}:${minutes}:${seconds}`;
            console.log(formattedDate);
            console.log(formattedTime);

            const response = await axios.get(`http://localhost:8080/rdv/id/${formattedDate}/${formattedTime}/${userEmail}`);
            const rdvData = response.data;
            setEditingRdv(rdvData);
            setShowModal(true);
        } catch (error) {
            console.error('Erreur lors de la récupération des données', error);
        }
    };


    const handleModalSubmit = async (newDate, newTime) => {
        console.log(newDate + "-" + newTime);
        console.log(`http://localhost:8080/rdv/` + editingRdv);

        try {
            await axios.put(`http://localhost:8080/rdv/` + editingRdv, null, {
                params: {
                    dateRDV: newDate,
                    heureRDV: newTime,
                },
            });
            setShowModal(false);
            setEditingRdv(null);
        } catch (error) {
            console.error('Erreur lors de la mise à jour des données', error);
        }
        fetchDataAndUpdateItems();
    };


    const EditRdvModal = ({rdv, onClose, onSubmit}) => {
        const [newDate, setNewDate] = useState(rdv.dateRDV);
        const [newTime, setNewTime] = useState(rdv.heureRDV);

        const handleSubmit = () => {
            onSubmit(newDate, newTime);
        };

        return (
            <Dialog open onClose={onClose}>
                <DialogTitle>Modifier le RDV</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Date"
                        type="date"
                        value={newDate}
                        onChange={(e) => setNewDate(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Heure"
                        type="time"
                        value={newTime}
                        onChange={(e) => setNewTime(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Annuler</Button>
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        Enregistrer
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };


    const handleCellSelection = (item) => {
        console.log('handleCellSelection', item);
    };

    const handleItemEdit = (item) => {
        console.log('handleItemEdit', item);
    };

    const handleRangeSelection = (item) => {
        console.log('handleRangeSelection', item);
    };

    return (
        <div className="agenda">
            <ReactAgenda
                minDate={now}
                maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
                disablePrevButton={false}
                startDate={startDate}
                cellHeight={20}
                locale="fr"
                items={items}
                numberOfDays={4}
                rowsPerHour={2}
                itemColors={colors}
                autoScale={false}
                fixedHeader={true}
                onItemEdit={handleEditClick} // Change this line to use handleEditClick
                onCellSelect={handleCellSelection}
                onRangeSelection={handleRangeSelection}
            />
            {showModal && <div className="overlay"></div>}
            {showModal && (
                <EditRdvModal
                    rdv={editingRdv}
                    onClose={() => setShowModal(false)}
                    onSubmit={handleModalSubmit}
                />
            )}
            {showModal2 && (
                <MedecinModal
                    onClose={() => setShowModal2(false)}
                    rdv={selectedRdv}
                    userEmail={userEmail}
                    open={showModal2} // Ajout de cette ligne pour contrôler l'affichage de la pop-up
                />
            )}

        </div>
    );
};
export default Agenda;