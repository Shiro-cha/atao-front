import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (title, start, end) => {
    const newEvent = { title, start, end };
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const date = e.target.elements.date.value;
        const time = e.target.elements.time.value;
        const start = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm').toDate();
        const end = moment(start).add(1, 'hour').toDate();
        addEvent(title, start, end);
      }}>
        <label htmlFor="title">Titre :</label>
        <input type="text" name="title" required />

        <label htmlFor="date">Date :</label>
        <input type="date" name="date" required />

        <label htmlFor="time">Heure :</label>
        <input type="time" name="time" required />

        <button type="submit">Ajouter</button>
      </form>

      <h1>Emploi du temps</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />

      <h1>Agenda</h1>
      {events.map((event) => (
        <div key={event.start.toString()}>
          <p>{event.title}</p>
          <p>Date : {moment(event.start).format('dddd D MMMM YYYY')}</p>
          <p>Heure de début : {moment(event.start).format('HH:mm')}</p>
          <p>Heure de fin : {moment(event.end).format('HH:mm')}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

