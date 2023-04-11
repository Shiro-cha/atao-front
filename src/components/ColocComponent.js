import React,{useEffect,useState,useRef} from 'react';
import { useCookies } from 'react-cookie';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NoColoc from './NoColoc';

//axios
import axios from "axios";

//baseUrl
import baseUrl from "../config/baseUrl";

let api = axios.create(baseUrl);



//const roommateList = []

export default function ColocComponent() {
    const textRef = useRef(null);
     const [cookies,setCookie] = useCookies(['users','coloc']);
     const [isCopied, setIsCopied] = useState(false);
     const [isLoading, setIsLoading] = useState(false);

    const [roommateList,setRoommateList] = useState([]);
    
     const handleCopyClick = () => {
     const text = textRef.current.textContent;

    const textField = document.createElement('textarea');
    textField.innerText = cookies.coloc;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 6000); // réinitialiser l'état de copie après 3 secondes
      
  };

    useEffect(() => {
    setIsLoading(true)
    api.post("/get-coloc",{
    id_coloc:cookies.coloc
    }).then((response) => {
    
    setRoommateList(response.data)
      setIsLoading(false)
  });
  
      
    
  }, []);

    if(roommateList && roommateList.length  > 0){
    
        return (
  <main  id="main" className="main">
    <Paper className="p-3">
     <div className="row">
      <div className="col-6">
    <Typography className="m-5 text-dark" sx={{color:"#444444"}} ref={textRef}>
    Identifiant coloc: <code>{cookies.coloc} </code><Button onClick={handleCopyClick} variant={isCopied?"filled":"contained"}>{isCopied ? 'Copié !' : 'Copier'}
      </Button>
    </Typography>
     </div>
      
      </div>
      {roommateList.map((roommate, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start" button>
            <ListItemAvatar>
              <Avatar>{roommate.nom.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={roommate._id.toString()==cookies.users?`${roommate.nom} (moi)`:roommate.nom}
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
        
        < NoColoc isLoading={isLoading}/>
        </main>
    )
    
    }

  
}

