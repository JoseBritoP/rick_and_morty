import { GET_CHARACTERS } from "./actions";

const initialState = {
  characters: [],
};

// {type:ADD_CHARACTER, payload:{}}
// {type: REMOVE_CHARACTER, payload:5}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, characters: action.payload };

    case "ADD_CHARACTER":
      return { ...state, characters: [...state.characters, action.payload] };

    case "REMOVE CHARACTER":
      return {
        ...state,
        characters: state.characters.filter(
          (char) => char.id !== action.payload
        ),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
