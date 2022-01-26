import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField({handleChange, value}) {
  return (
    <Box
      sx={{
        width: '60%',
      }}
    >
      <TextField size='small' fullWidth label="Type your todo" id="muiinput" value={value} onChange={(val) => handleChange(val)}/>
    </Box>
  );
}