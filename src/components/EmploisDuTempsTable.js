import { useState } from 'react';
 
import  Table from '@mui/material/Table';
import  TableBody from '@mui/material/TableBody';
import  TableCell from '@mui/material/TableCell';
import  TableContainer from '@mui/material/TableContainer';
import  TableHead from '@mui/material/TableHead';
import  TableRow from '@mui/material/TableRow';
import  Paper from '@mui/material/Paper';
import  Button from '@mui/material/Button';
import  Skeleton from '@mui/material/Skeleton';
import  TextField from '@mui/material/TextField';


const JOURS_SEMAINE = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
/**const data = [
  {
    name: 'Cours de mathématiques',
    Lundi: '9h - 11h',
    Mardi: '14h - 16h',
    Mercredi: '9h - 11h',
    Jeudi: '14h - 16h',
    Vendredi: '9h - 11h',
    Samedi: '',
    Dimanche: ''
  },
  {
    name: 'Cours de français',
    Lundi: '14h - 16h',
    Mardi: '9h - 11h',
    Mercredi: '14h - 16h',
    Jeudi: '9h - 11h',
    Vendredi: '14h - 16h',
    Samedi: '',
    Dimanche: ''
  },
  // plus de lignes pour d'autres cours
];**/

const data = [];

function TableEmploiDuTemps({ onUpdate }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [modifiedData, setModifiedData] = useState(data);

  const handleSave = () => {
    onUpdate(modifiedData);
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setModifiedData(data);
    setIsEditMode(false);
  };

  const handleInputChange = (event, rowIndex, colIndex) => {
    const value = event.target.value;
    setModifiedData((prevState) =>
      prevState.map((row, i) =>
        i === rowIndex ? { ...row, [JOURS_SEMAINE[colIndex]]: value } : row
      )
    );
  };
  
  const handleInputNameChange = (event, rowIndex) => {
    const value = event.target.value;
    setModifiedData((prevState) =>
      prevState.map((row, i) =>
        i === rowIndex ? { ...row, name: value } : row
      )
    );
  };

  const renderTable = () => {
    if (!data || data.length === 0) {
      return (
        <>
          {[...Array(5)].map((_, i) => (
            <TableRow key={i}>
              {[...Array(8)].map((_, j) => (
                <TableCell key={j}>
                  <Skeleton variant="text" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </>
      );
    }

    return (
      <>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {JOURS_SEMAINE.map((jour) => (
              <TableCell key={jour} align="center">
                {jour}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
                {
                
                isEditMode? (
                    <TextField
                      variant="outlined"
                      margin="none"
                      value={row.name}
                      onChange={(event) => handleInputNameChange(event, rowIndex)}
                    />
                  ) :
                    <TableCell>{row.name}</TableCell>
                }
              
              {JOURS_SEMAINE.map((jour, colIndex) => (
                <TableCell key={jour} align="center">
                  {isEditMode ? (
                    <TextField
                      variant="outlined"
                      margin="none"
                      value={modifiedData[rowIndex][jour]}
                      onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                    />
                  ) : (
                    row[jour]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        
      </>
    );
  };
  
  return(
  
  <TableContainer component={Paper}>
      <Table>
        {renderTable()}
      </Table>
      {isEditMode ? (
        <div style={{ marginTop: '10px' }}>
          <Button variant="contained" onClick={handleSave}>Sauvegarder</Button>
          <Button variant="outlined" style={{ marginLeft: '10px' }} onClick={handleCancel}>Annuler</Button>
        </div>
      ) : (
        <div style={{ marginTop: '10px' }}>
          <Button variant="outlined" onClick={() => setIsEditMode(true)}>Modifier</Button>
        </div>
      )}
    </TableContainer>
  
  );
  

  
}

export default TableEmploiDuTemps;

