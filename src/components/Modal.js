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

import FormModal from "./FormModal";

export default function MyModal({open,handleClose}) {

    

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
          
          FormModal
          <FormModal/>
          </CardContent>
       </Card>
      
      </Fade>
      </Modal>
    </>
    )

}
