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
        },
        addPost: (state, action) => {
            if(state.posts.length > 0){
                state.posts.push(action.payload);
            }else{
                state.posts = [action.payload];
            }
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => {
                return post.id !== action.payload
            });
        },
        editPost: (state, action) => {
            const data = action.payload.inputs;
            const id = action.payload.id;
            state.posts = state.posts.filter((post) => {
                return post.id !== id;
            });
            state.posts.push({id: id, title: data.title, text: data.text});
        }
    }
});

export const { setPosts, addPost, deletePost, editPost } = postSlice.actions;

export default postSlice.reducer;