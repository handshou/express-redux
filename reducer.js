// reducer.js

const browser = (state = [], action) => {
  switch (action.type) {
    case NEW_TAB:
      return [
        ...state,
        {
          id: action.id,
          content: action.content
        }
      ];
    case CLOSE_TAB:
      return [...state].filter(tab => tab.id !== action.id);
    default:
      return state;
  }
};

export default browser;
