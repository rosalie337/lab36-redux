import { createBlog, deleteBlog } from '../actions/blogActions';
import reducer from './blogReducer.js';

describe('blog reducer', () => {
    it('add a blog with CREATE_BLOG action', () => {
        const state = {
            blogs: []
        };

        const action = createBlog({
            title: 'some blog name', 
            author: 'Rosalie Lee', 
            body: 'some stuff you type in a blog'
        });

        const newState = reducer(state, action);
            blogs: [{ 
                title: 'some blog name', 
                author: 'Rosalie Lee', 
                body: 'some stuff you type in a blog' 
            }]
    });

    it('handles the DELETE_BLOG action', () => {
        const state = {
            blogs: [{ 
                title: 'some blog name'
            }]
        };

        const action = deleteBlog('some blog name');

        expect(reducer(state, action)).toEqual({
            blogs: []
        });
    });
});
