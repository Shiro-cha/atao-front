import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import moment from 'moment';
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";

import baseUrl from "../config/baseUrl";

let api = axios.create(baseUrl)


function EventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [task_members, setTask_members] = useState([]);
  
  const [users, setUsers] = useState([]);
  const [options, setOptions] = useState([]);

  
 
    

  const handleSubmit = (e) => {
    e.preventDefault();
    const start = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm').toDate();
    const end = moment(start).add(1, 'hour').toDate();
    addEvent(title, start, end,task_members);
    setTitle('');
    setDate('');
    setTime('');
    setOptions([]);
  };
  
  function onSelect(selectedList, selectedItem) {
    setTask_members([...task_members,selectedItem])
  }

  function onRemove(selectedList, removedItem) {
    setTask_members(selectedList)
  }

  
  useEffect(() => {
    api.post("/get-coloc").then((response) => {
      setUsers(response.data);

   response.data.forEach((user) => {
    setOptions([...options,{ name: `${user.nom} ${user.prenom}`, id: user._id.toString() }]);
  });
  console.log(options);
      
    });
  }, []);
  
  

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
      <Multiselect
      options={options}
      displayValue="name"
      onSelect={onSelect}
      onRemove={onRemove}
      isObject={true}
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

