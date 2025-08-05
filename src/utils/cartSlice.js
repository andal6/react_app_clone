import { createSlice } from "@reduxjs/toolkit";
const cartSlice= createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        additem:(state,action)=>{
            //mutating the state 
            state.items.push(action.payload)
        },
        removeitem:(state)=>{
            state.items.pop();
        },
        clearcart:(state,action)=>{
            state.items.length=0;
        }
    }}) 

    export const{additem,removeitem,clearcart}=cartSlice.actions;
    export default cartSlice.reducer;