import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../../shared/services/api-client";

export const fetchNotes = createAsyncThunk('notes/fetch',async()=>{
    const response = await apiClient.read();
    return response.data.notes;
})


const noteSlice = createSlice({
    name:'noteslice',
    initialState:{'notes':[],total:0,order:true,'search':[],isLoading:false},
    reducers:{
        //CRUD Operations
        // synchronize operations -> mtlb isme functions ek baari m ek he chlega in a synchronized way
        // action - coming from the component
        // state - update the centralized store
        addNote(state , action) {
            // action.payload m data bhar k aega
            const noteObject = action.payload;
            console.log(action.payload);
            // state m data update ho jayega
            state.notes.push(noteObject);
        },
        getTotalRecords(state , action) {
            state.total = state.notes.length;
        },
        removeNote(state , action) {

        },
        searchNote(state , action) {
            const searchWhat = action.payload[0];
            const searchValue = action.payload[1];
            state.search = state.notes.filter(note=>note[searchWhat] == searchValue)
        },
        sortNote(state , action) {
            state.order ? state.notes.sort((a, b) => a['title'].localeCompare(b['title'], "fr", { ignorePunctuation: true })) : state.notes.sort((a, b) => b['title'].localeCompare(a['title'], "fr", { ignorePunctuation: true }));
            state.order = !state.order;
        }
    },
    extraReducers:(builder)=>{
        //Async operations
        // builder.addCase(fetchNotes.pending,(state,action)=>{
        //     state.isLoading = true;
        // })
        // .addCase(fetchNotes.fulfilled,(state,action)=>{
        //     state.isLoading = false;
        //     state.notes = action.payload.notes;
        // })
        // .addCase(fetchNotes.rejected,(state,action)=>{
        //     state.isLoading = false;
        //     state.notes = [];
        //     state.err = action.payload;
        // })
    }
});

export const {addNote , removeNote , getNote , getTotalRecords , sortNote , searchNote} = noteSlice.actions;

export default noteSlice.reducer;