import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name:'login',
    initialState:{
        value:false
    },
    reducers:{
        setLogin:(state,newText)=>{
            state.value = newText.payload;
        }
    }
})

export const {setLogin} = loginSlice.actions;
export default loginSlice.reducer;