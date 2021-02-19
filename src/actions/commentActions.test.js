import { createComment, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from './commentActions';

describe('commentAction for creating a comment', () => {
    it('creates a comment', () => {
        const action = createComment({
        comment: 'cool post'
    });
    expect(action).toEqual({
        type: CREATE_COMMENT,
        payload: { comment: 'cool post' } 
    });
});

    it('deletes a comment via the user', () => {
    const action = deleteComment({
      user: '@pinay_noire'
    });

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: { user: '@pinay_noire' }
    });
  });
});

