import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    currentUser : null,
    loading : false,
    error : false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       LOGIN_START: (state) => {
           state.loading = true
       },
        LOGIN_SUCCESS: (state,action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        LOGIN_FAILURE: (state) => {
            state.loading = false;
            state.error = true;
        },
        LOGOUT: (state) => {
           return initialState
        },
        SUBSCRIPTION: (state,action) => {
           if(state.currentUser.subscribedUsers.includes(action.payload)){
               state.currentUser.subscribedUsers.splice(
                   state.currentUser.subscribedUsers.findIndex(
                       (channelId) => channelId === action.payload), 1)
           }else{
               state.currentUser.subscribedUsers.push(action.payload);
           }
        }
    }
})

export const {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    SUBSCRIPTION
} = userSlice.actions

export default  userSlice.reducer