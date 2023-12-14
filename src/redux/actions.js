// actions.js
export const voteAction = (optionId) => ({
  type: 'VOTE',
  payload: optionId,
});
