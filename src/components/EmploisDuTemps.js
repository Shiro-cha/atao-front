import React from 'react';
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
  return (
    <div>
      <h2>Emploi du temps</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default EmploiDuTemps;

