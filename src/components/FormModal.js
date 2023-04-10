import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import moment from 'moment';

function EventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  
 
    

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
    <div className="row">
    <div className="col-12">
      <TextField
        label="Titre"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-100 mt-2"
      />
      </div>
      <div className="col-12">
      <TextField
        
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="w-100 mt-2"
      />
      </div>
      <div className="col-12">
      <TextField
        
        name="time"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        className="w-100 mt-2"
      />
      </div>
      <div className="col-12">
      <Button type="submit" variant="contained" className="w-100 mt-2">Ajouter</Button>
      </div>
      </div>
    </form>
  );
}

export default EventForm;

