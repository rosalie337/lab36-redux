import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { deleteBlog } from '../../actions/blogActions'
import { useDispatch } from '../../state/BlogProvider';

const Blog = ({ title, author, body }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteBlog(title))
        
    };
    
    return(
        <>
        <dl>
            <dt>Title</dt>
            <dd>{title}</dd>

            <dt>Author</dt>
            <dd>{author}</dd>

            <dt>Body</dt>
            <dd>{body}</dd>
        </dl>
            <button onClick={handleClick}>Delete</button>
        </>
    );
};


Blog.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired

};

export default Blog;