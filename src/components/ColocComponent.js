import React,{useEffect,useState} from 'react';

import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import NoColoc from './NoColoc';

//axios
import axios from "axios";

//baseUrl
import baseUrl from "../config/baseUrl";

let api = axios.create(baseUrl);

const roommateList = [
  {
    name: 'Alice',
  },
  {
    name: 'Bob',
  },
  {
    name: 'Charlie',
  },
];

//const roommateList = []

export default function ColocComponent() {

    const [roommateList,setRoommateList] = useState([]);

    useEffect(() => {
    api.post("/get-coloc").then((response) => {
    
    setRoommateList(response.data)
      
  });
  
      
    
  }, []);

    if(roommateList && roommateList.length  > 0){
    
        return (
  <main  id="main" className="main">
    <Paper>
      {roommateList.map((roommate, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start" button>
            <ListItemAvatar>
              <Avatar>{roommate.nom.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={roommate.nom}
            />
          </ListItem>
          {index !== roommateList.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </Paper>
    </main>
  );
    
    }else{
    
    return (
        <main  id="main" className="main">
        
        < NoColoc/>
        </main>
    )
    
    }

  
}

