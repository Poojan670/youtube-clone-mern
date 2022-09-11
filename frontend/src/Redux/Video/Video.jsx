import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    currentVideo : null,
    loading : false,
    error : false
}

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        FETCH_START: (state) => {
            state.loading = true
        },
        FETCH_SUCCESS: (state,action) => {
            state.loading = false;
            state.currentVideo = action.payload;
        },
        FETCH_FAILURE: (state) => {
            state.loading = false;
            state.error = true;
        },
        LIKE: (state, action) => {
            if(!state.currentVideo.likes.includes(action.payload)){
                state.currentVideo.likes.push(action.payload)
                state.currentVideo.dislikes.splice(state.currentVideo.dislikes.findIndex
                ((userId) => userId === action.payload), 1)
            }
        },
        DISLIKE: (state, action) => {
            if(!state.currentVideo.dislikes.includes(action.payload)){
                state.currentVideo.dislikes.push(action.payload)
                state.currentVideo.likes.splice(state.currentVideo.dislikes.findIndex
                ((userId) => userId === action.payload), 1)
            }
        }
    }
})

export const {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    LIKE,
    DISLIKE
} = videoSlice.actions

export default  videoSlice.reducer