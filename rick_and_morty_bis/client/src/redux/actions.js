export const GET_CHARACTERS = "GET_CHARACTERS";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

export const addFavorite = (character) => {
  return {type:ADD_FAVORITE,payload: character}
}

export const removeFavorite = (id) => {
  return {type: REMOVE_FAVORITE, payload: id}
}

// export const getAllCharacters = () => {
//   return function (dispatch){
//     const URL_BASE = 'https://be-a-rym.up.railway.app/api'
//     const KEY = '25646530d133.e16d02b2bb0d7f53a40c'
//     fetch(`${URL_BASE}`)
//     .then((response)=>response.json())
//     .then ((data)=>{
//       return dispatch({type: GET_CHARACTERS, payload: data.results})
//     })
//   }
// };