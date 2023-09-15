import { Container } from "@mui/material";
import { Header } from "../../../shared/components/Header";
import { Add } from "../components/Add";
import { List } from "../components/List";
import { useState } from "react";
import { noteOperations } from "../services/note-operations";

export const NotePage = () => {
    const [notes , setNotes] = useState([]);
    const collectNoteData = () => {
        // setNotes -> this will trigger the re-rendering process on screen 
        // state m change nhi ho pa rha h if we are pushing in an array kyuki array ka address same he h to setsNotes render nhi kr rha h use baar baar
        // setNotes(noteOperations.getNotes());
        const notesArray = noteOperations.getNotes();
        setNotes([...notesArray]);
        // console.log('Received data from add',noteObject);
    }
    return(<Container fixed>
        <Header/>
        <Add fn = {collectNoteData}/>
        <List note ={notes} />
    </Container>)
}

// we are passing components and its properties