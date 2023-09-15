import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { searchNote } from '../redux/note-slice';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState,useRef } from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Search = () => {

  const dispatch = useDispatch();
  const noteObject = useSelector(state=>{
    return {'notes':state.noteSlice.notes,'search':state.noteSlice.search}
  });
  // component (Html PAGE) mount
  //life cycle methods (Hook)
//   useEffect(()=>{
//     //component mount
//     // jaise he list.jsx vala comonent chlega to component load hoga or jaise he component load hoga to useEffect chlega 
//     // or useEffect k chlte he total records dispatch ho jaege
//     console.log("component mount.......")
//     dispatch(getTotalRecords());
//   },[]);

    const search = useRef();
    

    const searchNotes = () =>{
        const searchValue = search.current.value;
        dispatch(searchNote([searchWhat,searchValue]));
    }


    const clearSearch = () =>{
        // setArr(noteObject.notes);
        noteObject.search = [];
    }


    const [searchWhat, setSearchWhat] = useState('');

    const handleChange = (event) => {
        setSearchWhat(event.target.value);
    };



    return(<div>
        <br/>
        {/* <h1> Total Records : {noteObject.notes.length}</h1> */}
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Completion Date</TableCell>
            <TableCell align="center">Importance</TableCell>
            <TableCell align="center">Operations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {noteObject.search.map(note=>{
            return (<TableRow>
                <TableCell align='center'>{note.id}</TableCell>
                <TableCell align='center'>{note.title}</TableCell>
                <TableCell align='center'>{note.descr}</TableCell>
                <TableCell align='center'>{note.cdate}</TableCell>
                <TableCell align='center' style={{backgroundColor:note.importance,color:"white"}}>{note.importance}</TableCell>
                <TableCell align='center'><DeleteIcon/><EditIcon/></TableCell>
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </TableContainer>

    <br/>


    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Search According To..</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchWhat}
          label="Search According To.."
          onChange={handleChange}
        >
          <MenuItem value={'id'}>Id</MenuItem>
          <MenuItem value={'title'}>Title</MenuItem>
        </Select>
    </FormControl>
    </Box>

    <br/>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="outlined-basic" inputRef={search} label="Enter" variant="outlined" />
      
    </Box>

    <br/>
    <br/>


    <Button onClick={searchNotes} variant="contained" color='success' >Search</Button>
     
    <Button onClick={clearSearch} variant="contained" color='warning' style={{marginLeft:'20px'}}>Clear Search</Button>

    </div>)
}