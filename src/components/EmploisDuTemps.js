import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Typography from "@mui/material/Typography";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 1,
    title: 'Réunion d\'équipe',
    start: new Date(2023, 3, 6, 10, 0),
    end: new Date(2023, 3, 6, 12, 0),
  },
  {
    id: 2,
    title: 'Rendez-vous chez le dentiste',
    start: new Date(2023, 3, 7, 14, 0),
    end: new Date(2023, 3, 7, 15, 0),
  },
  {
    id: 3,
    title: 'Déjeuner avec un ami',
    start: new Date(2023, 3, 8, 12, 0),
    end: new Date(2023, 3, 8, 13, 0),
  },
];

function EmploiDuTemps() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setSelectedEvent(null);
    setEditDialogOpen(false);
  };

  return (
    <div>
    <ul className="nav nav-tabs head-card nav-tabs-bordered">

                  <li className="nav-item info">
                    <h3>AGENDA</h3>
                  </li>
                </ul>
   
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
      />
      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Éditer l'événement</DialogTitle>
        {selectedEvent && (
          <DialogContent>
            <p>Titre : {selectedEvent.title}</p>
            <p>Date de début : {moment(selectedEvent.start.toString()).format('dddd D MMMM YYYY')}</p>
            <p>Date de fin : {moment(selectedEvent.end.toString()).format('dddd D MMMM YYYY')}}</p>
            {/* Ajoutez ici un formulaire pour éditer l'événement */}
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleEditDialogClose}>Fermer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EmploiDuTemps;

