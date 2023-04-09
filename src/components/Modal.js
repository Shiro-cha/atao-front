import  Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';


import IconButton  from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function MyModal() {

    

    return(
    
    <>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={true}
        
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
       <Fade in={true}>
       
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
                
              >
                <CloseIcon />
              </IconButton>
            }
          />
          
          <CardContent className="card-body">
          
          </CardContent>
       </Card>
      
      </Fade>
      </Modal>
    </>
    )

}
