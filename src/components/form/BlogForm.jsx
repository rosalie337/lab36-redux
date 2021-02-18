import React, { useState } from 'react'
import { createBlog } from '../../actions/blogActions';
import { useDispatch } from '../../state/BlogProvider';

const BlogForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState(1);
    const [body, setBody] = useState('');

    const handleSubmit = event => {
        event.PreventDefault();

        dispatch(createBlog({ title, author, body}));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={({ target }) => setName(target.value)}
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={({ target }) => setAuthor(target.value)}
            />
            <input
                text="text"
                placeholder="Write something here"
                value={body}
                onChange={({ target }) => setBody(target.value)}
            />
        </form>          
    );
};

export default BlogForm;
