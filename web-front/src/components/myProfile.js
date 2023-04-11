/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function MyProfile({ nom, photo, onUpdate }) {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  console.log(photo);

  // Utilisez useEffect pour mettre à jour la photo de profil lors de la réception de nouvelles données photo
  useEffect(() => {
    if (photo) {
      setProfilePhoto(photo);
      setShowDeleteButton(true);
    }
  }, [photo]);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfilePhoto(reader.result);
      setShowDeleteButton(true);
      savePhotoToLocalStorage(reader.result);

      if (onUpdate) {
        onUpdate({ file: event.target.files[0] }); // Mettez à jour la photo de profil côté serveur
      }
    };
  };

  const handleDeleteClick = () => {
    setProfilePhoto(null);
    setShowDeleteButton(false);
    localStorage.removeItem('profile-photo');
  };

  const savePhotoToLocalStorage = (photo) => {
    localStorage.setItem('profile-photo', photo);
  };

  const getPhotoFromLocalStorage = () => {
    const photo = localStorage.getItem('profile-photo');
    if (photo) {
      return photo;
    }
    return null;
  };

  return (
      <div className='profil'>
        <h3 style={{color: '#3A6898', marginLeft: '-20%'}}>
          Mon compte
        </h3>
        {profilePhoto ? (
            <div className='photo-profil'>
              <h4>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dr {nom.nom}
              </h4>
              <br/>
              <img src={`data:image/png;base64,${profilePhoto}`} alt="Photo de profil" width="200" height="150"/>
              <br/>
              {showDeleteButton && (
                  <Button className="profile-delete-button" onClick={handleDeleteClick} style={{marginLeft: '25%'}}>
                    Supprimer
                  </Button>
              )}
            </div>
        ) : (
            <div>
              <input type="file" onChange={handleFileChange} />
            </div>
        )}
      </div>
  );
}

export default MyProfile;
