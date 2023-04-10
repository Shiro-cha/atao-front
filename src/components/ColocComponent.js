import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';



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

export default function ColocComponent() {


  return (
  <main  id="main" className="main">
    <List >
      {roommateList.map((roommate, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
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
    </List>
    </main>
  );
}

