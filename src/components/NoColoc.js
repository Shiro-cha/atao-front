import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography  from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import SearchColoc from "./SeachColoc"

const NoRoommate = ({user_id}) => {

   

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

  const handleCreateGroup = () => {
    // Faire quelque chose avec la valeur de "colocataire"
    console.log(colocataire);
    setOpenCreateDialog(false);
  };
  
  const createColoc =() =>{
  
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
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

