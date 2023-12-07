// reducers.js
const initialState = {
    options: [
      { id: 1, text: 'Алекс', votes: 0 },
      { id: 2, text: 'Не Алекс', votes: 0 },
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
  