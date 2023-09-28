import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: null
    },
    reducers: {
        setPosts: (state, action) => {
            // console.log(action.payload);
            state.posts = action.payload;
        }
    }
});

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;