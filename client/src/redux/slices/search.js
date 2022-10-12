import { createSlice } from "@reduxjs/toolkit";

export const search = createSlice({
    name:'search',
    initialState:{
        value:""
    },
    reducers:{
        setSearch:(state,newText)=>{
            state.value = newText.payload;
        }
    }
})

export const {setSearch} = search.actions;
export default search.reducer;