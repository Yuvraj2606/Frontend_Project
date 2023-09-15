// back end calls
// crud operations
import axios from 'axios';
export const apiClient = {
    read() {
        // Promise state - pending , fullFilled , Rejected
        const promise = axios.get(process.env.REACT_APP_NOTES_URL);    //Async
        console.log('Promise is ', promise);
        promise.then(result=>{
            console.log('Result is ',result);
        }).catch(err=>{
            console.log("Error is ",err);
        })
    },
    insert() {
        //insert
    },
    update() {

    },
    remove() {

    }
} 