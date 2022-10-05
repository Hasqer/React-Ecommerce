import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
    name:'text',
    initialState:{
        value:[
            "deneme1",
            "deneme2",
            "deneme3",
            "deneme4",
            "deneme5",
            "deneme6",
        ]
    },
    reducers:{
        setText:(state,newText)=>{
            state.value.push(newText.payload);
        }
    }
})

export const {setText} = textSlice.actions;
export default textSlice.reducer;