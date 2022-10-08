import { createSlice } from "@reduxjs/toolkit";

export const userInfo = createSlice({
    name:'userInfo',
    initialState:{
        value:{
            name:"",
            surname:""
        }
    },
    reducers:{
        setUser:(state,newText)=>{
            state.value.name = newText.payload.name;
            state.value.surname = newText.payload.surname;
        }
    }
})

export const {setUser} = userInfo.actions;
export default userInfo.reducer;