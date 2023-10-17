import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postRedux';

export default configureStore({
    reducer: {
        posts: postsReducer
    }
});