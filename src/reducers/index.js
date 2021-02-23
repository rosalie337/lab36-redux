import { combineReducer } from 'redux';
import commentReducer from './commentReducer';
import blogReducer from './blogReducer';

export default combineReducer({
    post: blogReducer,
    comment: commentReducer
});