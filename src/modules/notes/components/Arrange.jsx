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
import { sortNote } from '../redux/note-slice';

export const Arrange = () => {

  const dispatch = useDispatch();
  const noteObject = useSelector(state=>{
    return {'notes':state.noteSlice.notes,'total':state.noteSlice.total}
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


    const sortNotes = () =>{
        dispatch(sortNote());
    }





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
          {noteObject.notes.map(note=>{
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

    <Button onClick={sortNotes} variant="contained" color='success'>Sort Note</Button>

    </div>)
}