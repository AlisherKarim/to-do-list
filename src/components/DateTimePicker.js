import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

export default function BasicDateTimePicker({dateChangeHandler, dateValue}) {
  return (
    <Box sx={{width: '100%'}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
            renderInput={(params) => <TextField size='small' {...params} />}
            value={dateValue}
            label="Choose Date and Time"
            onChange={(newValue) => {
                dateChangeHandler(newValue);
            }}
            />
        </LocalizationProvider>
    </Box>
  );
}