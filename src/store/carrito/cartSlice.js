import { createSlice } from "@reduxjs/toolkit";

//Para añadir un Item al carrito
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isSaving: true,
        cartAdded: '',
        added: null,
        items: [],
    },
    reducers:{
        addItem: (state, {payload}) => {

        },
        setItem: (state, action)=>{

        },
        setSaving:(state) =>{

        },
        deleteItem: (state, {payload}) => {

        }
    }
});

export const { 
   addItem,
   setItem,
   setSaving,
   deleteItem,  
} = cartSlice.actions