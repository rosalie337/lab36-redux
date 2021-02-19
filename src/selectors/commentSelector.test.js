import { getComment } from './commentSelector';

describe('comment selector', () => {
  it('uses the comment selector', () => {
    const state = {
      comment: [{ comment: 'great post' }]
    };
    const comment = getComment(state);

    expect(comment).toEqual([{ comment: 'great post' }]);
  });
});