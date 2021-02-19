import { createComment, CREATE_COMMENT, DELETE_COMMENT } from './commentActions';

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
});