import {useState} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleSaveEvent = (event) => {
    // Enregistrer l'événement modifié dans la base de données ou dans la liste des événements
    setSelectedEvent(null);
  };

  return (
    <div>
      <h4>Agenda</h4>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectEvent={handleSelectEvent}
        style={{ height: 500 }}
      />
      {selectedEvent && (
        <div className="modal">
          <h3>Modifier l'événement</h3>
          <p>
            <label>Titre:</label>
            <input
              type="text"
              value={selectedEvent.title}
              onChange={(e) => setSelectedEvent({ ...selectedEvent, title: e.target.value })}
            />
          </p>
          <p>
            <label>Date de début:</label>
            <input
              type="datetime-local"
              value={moment(selectedEvent.start).format('YYYY-MM-DDTHH:mm')}
              onChange={(e) => setSelectedEvent({ ...selectedEvent, start: moment(e.target.value).toDate() })}
            />
          </p>
          <p>
            <label>Date de fin:</label>
            <input
              type="datetime-local"
              value={moment(selectedEvent.end).format('YYYY-MM-DDTHH:mm')}
              onChange={(e) => setSelectedEvent({ ...selectedEvent, end: moment(e.target.value).toDate() })}
            />
          </p>
          <button onClick={handleCloseModal}>Annuler</button>
          <button onClick={() => handleSaveEvent(selectedEvent)}>Enregistrer</button>
        </div>
      )}
    </div>
  );
}

export default EmploiDuTemps;

