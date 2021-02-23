import { createComment } from '../actions/commentActions';
import commentReducer from './commentReducer';

describe('comment reducer', () => {
  it('confirms a user is able to create a comment', () => {
    const state = {
      comment: []
    };
    const action = createComment({
      comment: 'cool post'
    });
    const newState = commentReducer(state, action);
    expect(newState).toEqual({ comment: [{ comment: 'cool post' }] });
  });
});
