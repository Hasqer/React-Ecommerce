import { createSlice } from "@reduxjs/toolkit";

export const userInfo = createSlice({
    name:'userInfo',
    initialState:{
        value:{
            name:"batuhan",
            lastname:"ilter"
        }
    },
    reducers:{
        setUser:(state,newText)=>{
            state.value.name = newText.payload.name;
            state.value.lastName = newText.payload.lastName;
        }
    }
})

export const {setUser} = userInfo.actions;
export default userInfo.reducer;