import {createSlice} from "@reduxjs/toolkit";
const initialState = {sum:0,};

const addSlice = createSlice(
    {
        name:"add", 
        initialState,
        reducers:{
            //when calling createSlice, Redux Toolkit automatically generates action creators for each reducer function you define in the reducers object of the slice. 
            //addSlice.actions is an object containing all the action creators for your slice, keyed by the names you've given to your reducers. In this case, there's an action creator named add because you've defined a reducer with the key add.
            add:(state,action) => {
                state.sum = action.payload.a + action.payload.b;
            },
        },
    }
);
export const {add} = addSlice.actions;
export default addSlice.reducer;
