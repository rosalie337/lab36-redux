import React from 'react';
import { useSelector } from '../../state/BlogProvider';
import { getBlogs} from '../../selectors/blogSelectors';
import Blog from '../blogs/Blog';

const BlogList = () => {
    const blogs = useSelector(getBlogs);

    const blogElements = blogs.map(blog => 
        (
            <li key={blog.title}>
                <Blog {...blog} />
            </li>
        ));

    return (
        <ul>
            {blogElements}
        </ul>
    );
};

export default BlogList;
