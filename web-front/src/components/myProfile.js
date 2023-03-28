/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function MyProfile() {
  const [photo, setPhoto] = useState(null);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  useEffect(() => {
    const photoFromLocalStorage = getPhotoFromLocalStorage();
    if (photoFromLocalStorage) {
      setPhoto(photoFromLocalStorage);
      setShowDeleteButton(true);
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhoto(reader.result);
      setShowDeleteButton(true);
      savePhotoToLocalStorage(reader.result);
    };
  };

  const handleDeleteClick = () => {
    setPhoto(null);
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
      {photo ? (
        <div className='photo-profil'>
          <h4>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; John doe
          </h4>
          <br/>
          <img src={photo} alt="Photo de profil" width="200" height="150"/>
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
