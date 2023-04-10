import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography  from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const NoRoommate = () => {
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

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Typography variant="h4">Vous n'avez pas encore de colocataire</Typography>
      <Button variant="contained" color="primary" onClick={handleJoinDialogOpen}>
        Joindre
      </Button>
      <Dialog open={openJoinDialog} onClose={handleJoinDialogClose}>
        <DialogTitle>Recherche de colocataire</DialogTitle>
        <DialogContent>
          {/* Contenu de la boîte de dialogue de recherche */}
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
      <Button variant="contained" color="secondary" onClick={handleCreateDialogOpen}>
        Créer un groupe
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
  );
};

export default NoRoommate;

