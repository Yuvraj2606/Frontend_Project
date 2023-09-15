// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import React, { useState } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRef } from 'react';
// import { noteOperations } from '../services/note-operations';
import { MuiColorInput } from 'mui-color-input';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { addNote } from '../redux/note-slice';
import { Note } from '../models/note';
import {useDispatch} from 'react-redux';
import { Typography } from '@mui/material';

export const Add = (props)=>{
    const id = useRef();
    const title = useRef();
    const descr = useRef();
    const [value, setValue] = React.useState('#ffffff');
    const [selectedDate , setDate] = React.useState(null);
    const [message ,setMessage] = React.useState();

    const Dispatch = useDispatch();


    const handleChange = (newValue) => {
        setValue(newValue)
    }


    const takeNote = ()=> {
        const idValue = id.current.value;
        const titleValue = title.current.value;
        const descrValue = descr.current.value;
        const cdate = selectedDate ? selectedDate.toISOString() : null;
        const importance = value;


        const noteObject = new Note(idValue,titleValue,descrValue,cdate,importance);

        Dispatch(addNote(noteObject));

        setMessage('Record Added Successfully....');
        setTimeout(()=>{
          setMessage('')
        },2000);
        // console.log(idValue);
        // console.log(titleValue);
        // console.log(descrValue);
        //put the data in an object
        // const noteObject = {'id':idValue,'title':titleValue,'descr':descrValue};
        // noteOperations.addNote(idValue,titleValue,descrValue,cdate,importance);
        // props.fn();    //call collectNoteData
    }

    return (<>
       
        <Box sx={{
        margin:5, flexDirection:'column', display:'flex'
       
      }}>
        <Typography variant="h1" component="h2">
          {message}
        </Typography>
         <TextField
        id="note-id"
        label="Id"
        inputRef={id}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DescriptionIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        id="note-title"
        label="Title"
        inputRef={title}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SpatialAudioOffIcon/>
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
       <TextField
        id="note-desc"
        label="Description"
        inputRef={descr}
        multiline
        maxRows={4}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SpatialAudioOffIcon/>
            </InputAdornment>
          ),
        }}
        variant="standard"
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker value={selectedDate} onChange={(newValue) => setDate(newValue)} />
      </LocalizationProvider>



      <MuiColorInput value={value} onChange={handleChange} />
      

      <Button onClick={takeNote} variant="contained" color='warning'>Add Note</Button>
      </Box>
    </>);
}