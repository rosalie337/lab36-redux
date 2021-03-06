import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

const Comment = ({ comment, user }) => {
  const  dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(deleteComment(user));
  };
  return (
    <div>
      <span>comment: {comment}</span> 
      <span>user: {user}</span> 
      <button onClick={handleClick}>Delete Comment</button>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired

};

export default Comment;
