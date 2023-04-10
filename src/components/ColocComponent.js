import React from 'react';

import Card from '@mui/material/Card';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import NoColoc from './NoColoc';



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

    if(roommateList && roommateList.length  > 0){
    
        return (
  <main  id="main" className="main">
    <Card component={"paper"}>
      {roommateList.map((roommate, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start" button>
            <ListItemAvatar>
              <Avatar>{roommate.name.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={roommate.name}
            />
          </ListItem>
          {index !== roommateList.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </Card>
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

