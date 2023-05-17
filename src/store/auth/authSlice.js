import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        status: 'not-authenticated',
        id: null,
        email: null,
        username: null,
        phone: null,
        errorMessage: null,
    },
    reducers:{
        login: (state,action) =>{
                state.status = action.payload
        },
        logout: (state, payload) => {
            state.status = 'not-authenticated',
            state.id= null;
            state.email= null;
            state.username= null;
            state.phone= null;
            state.errorMessage= message.payload;
        },
        checkingCredentials: (state) =>{
            state.status = 'checking';
        }
    }
});

export const {login, logout,checkingCredentials} = authSlice.actions;