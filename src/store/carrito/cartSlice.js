import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem: (state, action) => {
                        
            state.push(action.payload)
        
        },
        deleteItem: (state, action) => {
            return state.filter((product) =>  product.id !== action.payload)
        }
    }
});

export const { 
   addItem,
   deleteItem,  
} = cartSlice.actions;