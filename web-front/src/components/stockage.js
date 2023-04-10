/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { PictureAsPdf, Description, InsertDriveFile, MusicNote, Movie, Unarchive, Slideshow } from '@material-ui/icons';
import img from '../images/easy-health.png';
import MenuBar from './menuBar';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from './footer';
import BackButton from './BackButton';
import pdf from '../images/pdf.jpg';
import word from '../images/word.jpg';
import file from '../images/fichier.PNG';
import UserContext from './UserContext';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function Stockage() {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const patientMail = location.state?.patientMail;
    const { userEmail } = useContext(UserContext);
    const [files, setFiles] = useState([]);
    const [editingFile, setEditingFile] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/files/${patientMail}/${userEmail}`);
                setFiles(response.data);
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        };
        fetchData();
    }, [patientMail, userEmail]);

    const deleteFile = async (fileName) => {
        try {
            await axios.delete(`http://localhost:8080/delete/${fileName}`);
            const updatedFiles = await axios.get(`http://localhost:8080/files/${patientMail}/${userEmail}`);
            setFiles(updatedFiles.data);
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    };


    const handleFileNameSubmit = async (currentFileName, newFileName) => {
        if (currentFileName === newFileName) {
            setEditingFile(null);
            return;
        }

        try {
            await axios.put(`http://localhost:8080/rename/${currentFileName}/${newFileName}`);
            setFiles((prevFiles) =>
                prevFiles.map((file) =>
                    file.nomFichier === currentFileName ? { ...file, nomFichier: newFileName } : file
                )
            );
        } catch (error) {
            console.error('Error renaming file:', error);
        }

        setEditingFile(null);
    };

    const handleFileChange = async (event) => {
        setSelectedFile(event.target.files[0]);

        // Upload the file only after the state is updated
        const formData = new FormData();
        formData.append('file', event.target.files[0]);

        try {
            await axios.post(
                `http://localhost:8080/upload/${patientMail}/${userEmail}`,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );
            const updatedFiles = await axios.get(`http://localhost:8080/files/${patientMail}/${userEmail}`);
            setFiles(updatedFiles.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };




    const renderIcon = (fileType) => {
        if (fileType === 'pdf') {
            return <PictureAsPdf style={{ fontSize: 50 }} />;
        } else if (fileType === 'doc' || fileType === 'docx') {
            return <Description style={{ fontSize: 50 }} />;
        } else if (fileType === 'zip') {
            return <Unarchive style={{ fontSize: 50 }} />;
        } else if (fileType === 'mp4') {
            return <Movie style={{ fontSize: 50 }} />;
        } else if (fileType === 'mp3') {
            return <MusicNote style={{ fontSize: 50 }} />;
        } else if (fileType === 'pptx') {
            return <Slideshow style={{ fontSize: 50 }} />;
        } else if (fileType === 'png' || fileType === 'jpg') {
            return null;
        } else {
            return <InsertDriveFile style={{ fontSize: 50 }} />;
        }
    };


    const downloadFile = (fileData, fileName, fileType) => {
        let mimeType;
        if (fileType === 'pdf') {
            mimeType = 'application/pdf';
        } else if (fileType === 'doc') {
            mimeType = 'application/msword';
        } else if (fileType === 'docx') {
            mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        } else if (fileType === 'zip') {
            mimeType = 'application/zip';
        } else if (fileType === 'mp4') {
            mimeType = 'video/mp4';
        } else if (fileType === 'mp3') {
            mimeType = 'audio/mpeg';
        } else if (fileType === 'pptx') {
            mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        } else if (fileType === 'png') {
            mimeType = 'image/png';
        } else if (fileType === 'jpg') {
            mimeType = 'image/jpeg';
        } else {
            mimeType = 'application/octet-stream';
        }
        const linkSource = `data:${mimeType};base64,${fileData}`;
        const downloadLink = document.createElement('a');
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    };

    const [selectedFile, setSelectedFile] = useState(null);


    return (
        <div className="allProfilPage">
            <div className="headerProfil">
        <span style={{ position: 'absolute', marginLeft: '45%', top: '0px' }}>
          <img src={img} width="20%" />
        </span>
            </div>
            <br />
            <span>
        <MenuBar />
      </span>
      <div style={{marginTop: '10%', marginLeft: '25%'}}>
            <BackButton/>
        </div>
            <div style={{ marginTop: '-2%',marginLeft: '50%' }}>

                <input
                    accept="*/*"
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    type="file"
                    onChange={handleFileChange}
                />

                <label htmlFor="contained-button-file" >
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        component="span"
                        startIcon={<CloudUploadIcon />}

                    >
                        Upload File
                    </Button>

                </label>
            </div>
            <div style={{marginLeft: '20%'}}>
                {files.map((file, index) => {
                    const fileType = file.nomFichier.split('.').pop();
                    const fileNameWithoutExtension = file.nomFichier.slice(0, -fileType.length - 1);
                    const isEditing = editingFile === file.nomFichier;
                    console.log(fileType);
                    return (
                        <div key={index} style={{ display: 'inline-block', margin: '2%', textAlign: 'center' }}>
                            {fileType === 'png' || fileType === 'jpg' ? (
                                <img
                                    src={`data:image/${fileType};base64,${file.fileData}`}
                                    alt={file.nomFichier}
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                            ) : (
                                renderIcon(fileType)
                            )}
                            <p></p>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={() => downloadFile(file.fileData, file.nomFichier, fileType)}
                            >
                                Download
                            </Button>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        defaultValue={fileNameWithoutExtension}
                                        onBlur={(e) =>
                                            handleFileNameSubmit(file.nomFichier, `${e.target.value}.${fileType}`)
                                        }
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                e.target.blur();
                                            }
                                        }}
                                        autoFocus
                                    />
                                ) : (
                                    <p>{file.nomFichier}</p>
                                )}
                                <IconButton
                                    onClick={() => (isEditing ? setEditingFile(null) : setEditingFile(file.nomFichier))}
                                >
                                    <EditIcon />
                                </IconButton>
                            </div>
                            <IconButton onClick={() => deleteFile(file.nomFichier)}>
                                <DeleteIcon style={{ color: 'red' }} />
                            </IconButton>
                            <BackButton patientMail={patientMail}  />
                        </div>
                    );
                })}

            </div>
            <Footer />
        </div>
    );
}

export default Stockage;
