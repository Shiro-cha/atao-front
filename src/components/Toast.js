import React, { useState } from 'react';
import { Snackbar, IconButton } from '@mui/material';
import { Close, CheckCircle, Error } from '@mui/icons-material';

const Toast = ({ open, handleClose, type }) => {
  const [message, setMessage] = useState('');

  const getMessage = (type) => {
    if (type === 'success') {
      return 'L\'événement a été ajouté avec succès.';
    } else if (type === 'error') {
      return 'Une erreur s\'est produite lors de l\'ajout de l\'événement.';
    } else {
      return '';
    }
  };

  const getIcon = (type) => {
    if (type === 'success') {
      return <CheckCircle sx={{ color: 'green' }} />;
    } else if (type === 'error') {
      return <Error sx={{ color: 'red' }} />;
    } else {
      return null;
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      message={
        <>
          {getIcon(type)}
          {message || getMessage(type)}
        </>
      }
      action={
        <IconButton size="small" color="inherit" onClick={handleClose}>
          <Close fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default Toast;

