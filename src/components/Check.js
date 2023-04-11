import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
//import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import RadioUncheked from '@mui/icons-material/RadioButtonUncheckedRounded';

//axios
import axios from "axios";

//baseUrl
import baseUrl from "../config/baseUrl";

let api = axios.create(baseUrl);

export default function CircularIntegration({etat}) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: "green",
      '&:hover': {
        bgcolor: "green",
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      api.post("/validate-task").then(function({data}){
      
      setSuccess(true);
        setLoading(false);
      
      }).catch(function(err){
      
      setSuccess(false);
        setLoading(false);
      
      })
        
      
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success || etat=="complete" ? <CheckIcon /> : <RadioUncheked />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: "green",
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      
    </Box>
  );
}
