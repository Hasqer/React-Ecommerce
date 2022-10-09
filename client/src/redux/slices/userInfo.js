import { createSlice } from "@reduxjs/toolkit";

export const userInfo = createSlice({
    name:'userInfo',
    initialState:{
        value:{}
    },
    reducers:{
        setUser:(state,newText)=>{
            state.value = newText.payload;
        }
    }
})

export const {setUser} = userInfo.actions;
export default userInfo.reducer;