import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getdata = ()=>{
    
}

export const productSlice = createSlice({
    name:'products',
    initialState:{
        value:[]
    },
    reducers:{
        getProduct:(state,data)=>{
            state.value = data.payload;
            
        },
        
    }
})

export const {getProduct} = productSlice.actions;
export default productSlice.reducer;