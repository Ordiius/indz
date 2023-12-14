// reducers.js
const initialState = {
  options: [
    { id: 1, text: 'Option A', votes: 0 },
    { id: 2, text: 'Option B', votes: 0 },
  ],
};

const pollReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      const updatedOptions = state.options.map((option) => {
        if (option.id === action.payload) {
          return { ...option, votes: option.votes + 1 };
        }
        return option;
      });
      return { ...state, options: updatedOptions };
    default:
      return state;
  }
};

export default pollReducer;
