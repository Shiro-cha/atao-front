import { useState } from 'react';
import  Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import moment from 'moment';

import IconButton  from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function MyModal({open,handleClose}) {

    const [events, setEvents] = useState([]);

    const addEvent = (title, start, end) => {
    const newEvent = { title, start, end };
    setEvents([...events, newEvent]);
  };
    

    return(
    
    <>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50%',
          margin: '0 auto',
        }}
      >
       <Fade in={open}>
       
       <Card sx={{
            background:"#ffffff",
            width:"100%",
            height:"90%",
            position:'relative',
            padding:'10px 20px',
            zIndex:1012
          }}>
          <CardHeader
            title={'Approuver demande'}
            action={
              <IconButton
                aria-label="close"
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            }
          />
          
          <CardContent className="card-body">
          
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
          
          </CardContent>
       </Card>
      
      </Fade>
      </Modal>
    </>
    )

}
