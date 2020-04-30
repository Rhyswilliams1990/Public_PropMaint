export const textChanged = (text) => ({
  type: 'TEXT_CHANGED',
  payload: text,
});

export const textChangedToSatisfyLinter = (text) => ({
  type: 'TEXT_CHANGED',
  payload: text,
});
