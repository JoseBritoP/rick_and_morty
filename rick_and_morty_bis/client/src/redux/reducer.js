import { ADD_FAVORITE } from "./actions";
import { REMOVE_FAVORITE } from "./actions";
import { GET_CHARACTERS } from "./actions";

const initialState = {
  characters: [],
  myFavorites:[],
};

// {type:ADD_CHARACTER, payload:{}}
// {type: REMOVE_CHARACTER, payload:5}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

      case GET_CHARACTERS: 
      return {...state,characters:action.payload} 

      case ADD_FAVORITE:
        return {...state, myFavorites: [...state.myFavorites, action.payload],};
  
      case REMOVE_FAVORITE:
        return {...state, myFavorites: state.myFavorites.filter((char) => char.id !== action.payload)};
    
    default:
      return { ...state };
  }
};

export default rootReducer;
