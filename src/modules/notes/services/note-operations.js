import {Note} from "../models/note.js";
import dayjs from 'dayjs';

export const noteOperations = {
    notes:[],
    addNote(id, title ,descr , cdate , importance) {
        const date = cdate ? dayjs(cdate).format('DD/MM/YYYY') : '';
        const noteObject = new Note(id, title ,descr , date , importance);
        this.notes.push(noteObject);
        return noteObject;
    },
    getNotes() {
        return this.notes;
    }
}