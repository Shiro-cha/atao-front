import { useState } from 'react';
import TextFieldfrom from '@mui/material/TextField';
import Button from '@mui/material/Button';
import moment from 'moment';

function EventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  
  
  const [events, setEvents] = useState([]);

    const addEvent = (title, start, end) => {
    const newEvent = { title, start, end };
    setEvents([...events, newEvent]);
  };
    

  const handleSubmit = (e) => {
    e.preventDefault();
    const start = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm').toDate();
    const end = moment(start).add(1, 'hour').toDate();
    addEvent(title, start, end);
    setTitle('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Titre"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Date"
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <TextField
        label="Heure"
        name="time"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">Ajouter</Button>
    </form>
  );
}

export default EventForm;

