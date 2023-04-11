import { useState } from 'react';
import  Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import moment from 'moment';

//axios
import axios from "axios";

import IconButton  from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import FormModal from "./FormModal";
import Toast from "./Toast";


//baseUrl
import baseUrl from "../config/baseUrl";

let api = axios.create(baseUrl);

export default function MyModal({open,handleClose}) {

    const [events, setEvents] = useState([]);
    const [openToast, setOpenToast] = useState(false);
    const [typeToast, setTypeToast] = useState("success");

    const handleCloseToast = (evt) => {

        setOpenToast(false);

    }

    const addEvent =  (title, start, end,task_members) => {
    const newEvent = { title, start, end ,task_members};
    setEvents([...events, newEvent]);

    api.post("/create-task",newEvent).then(function({data}){


        setTypeToast("success")
         setOpenToast(true)
    }).catch(function(err){

        setTypeToast("error")
         setOpenToast(true)
    });

  };

    return(

    <>
    <Toast open={openToast} handleClose={handleCloseToast} type={typeToast} />
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
            title={'Ajouter une tâche'}
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

          <FormModal addEvent={addEvent}/>

          </CardContent>
       </Card>

      </Fade>
      </Modal>
    </>
    )

}
