import React, { useState } from "react";
import { useCookies } from 'react-cookie';
import Button from "@mui/material/Button";
import axios from 'axios';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography  from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import SearchColoc from "./SeachColoc";

import Toast from "./Toast";

import baseUrl from "../config/baseUrl";

let api = axios.create(baseUrl)

const NoRoommate = ({user_id}) => {
    const [openToast, setOpenToast] = useState(false);
    const [typeToast, setTypeToast] = useState("success");

    const handleCloseToast = (evt) => {

        setOpenToast(false);

    }

   const [cookies] = useCookies(['users']);
  const [openJoinDialog, setOpenJoinDialog] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [colocataire, setColocataire] = useState("");

  const handleJoinDialogOpen = () => {
    setOpenJoinDialog(true);
  };

  const handleJoinDialogClose = () => {
    setOpenJoinDialog(false);
  };

  const handleCreateDialogOpen = () => {
    setOpenCreateDialog(true);
  };

  const handleCreateDialogClose = () => {
    setOpenCreateDialog(false);
  };

  const handleColocataireChange = (event) => {
    setColocataire(event.target.value);
  };

  
  
  const handleCreateGroup =() =>{
  
  api.post('/create-coloc', {
      id_members:[cookies.users],
      nom_coloc:colocataire
    })
    .then(response => {
      setTypeToast("success")
         setOpenToast(true)
         setOpenCreateDialog(false);
      
    })
    .catch(error => {
      // handle error
      setTypeToast("error")
         setOpenToast(true)
    });
  
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
       <Toast open={openToast} handleClose={handleCloseToast} type={typeToast} />
      <Typography variant="p" sx={{color:"#333333"}}>Vous n'avez pas encore de colocataire</Typography>
      <div className="mt-5 row">
      <div className="col-6">
      <Button variant="contained" color="primary" onClick={handleJoinDialogOpen}>
        Joindre
      </Button>
      <Dialog open={openJoinDialog} onClose={handleJoinDialogClose}>
        <DialogTitle>Recherche de colocataire</DialogTitle>
        <DialogContent>
          <SearchColoc/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleJoinDialogClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleJoinDialogClose} color="primary" variant="contained">
            Rechercher
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      <div className="col-6">
      <Button variant="contained" color="secondary" onClick={handleCreateDialogOpen}>
        Créer
      </Button>
      <Dialog open={openCreateDialog} onClose={handleCreateDialogClose}>
        <DialogTitle>Création de groupe</DialogTitle>
        <DialogContent>
          <TextField label="Nom du colocataire" fullWidth value={colocataire} onChange={handleColocataireChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateDialogClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleCreateGroup} color="primary" variant="contained">
            Créer
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      </div>
    </div>
  );
};

export default NoRoommate;

