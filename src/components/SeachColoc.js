import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const suggestions = [
  { label: 'Colocataire 1' },
  { label: 'Colocataire 2' },
  { label: 'Colocataire 3' },
  { label: 'Colocataire 4' },
  { label: 'Colocataire 5' },
  { label: 'Colocataire 6' },
  { label: 'Colocataire 7' },
  { label: 'Colocataire 8' },
];

export default function SearchDialog() {
  const [value, setValue] = React.useState(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      options={suggestions}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Rechercher un colocataire"
          margin="normal"
          variant="outlined"
          InputProps={{ ...params.InputProps, type: 'search' }}
        />
      )}
    />
  );
}

