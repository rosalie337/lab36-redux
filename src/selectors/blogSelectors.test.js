import { countBlogs, getBlogs } from './blogSelectors';

describe('blog selectors', () => {
    it('select the list of blogs from state', () => {
        const state = {
            blogs: [{ 
                title: 'some blog name', 
                author: 'Rosalie Lee', 
                body: 'some stuff you type in a blog' 
            }]
        };

        const blogs = getBlogs(state);

        expect(blogs).toEqual([{ title: 'some blog name', author: 'Rosalie Lee', body: 'some stuff you type in a blog' }])
    });

    it('select the number of blog posts', () => {
        const state = {
           blogs: [{ title: 'some blog name', author: 'Rosalie Lee', body: 'some stuff you type in a blog' }]
        };

        expect(countBlogs(state)).toEqual(1);
    });
});