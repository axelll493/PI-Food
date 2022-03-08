import axios from "axios";
export const GET_RECIPES = "GET_RECIPES"
export const GET_NAME_RECIPES = "GET_NAME_RECIPES"
export const FILTER_BY_TYPE = "FILTER_BY_TYPE"
export const GET_TYPES = "GET_TYPES"
export const GET_ORDER = "GET_ORDER"
export const GET_ORDER_SCORE = "GET_ORDER_SCORE"
export const POST_RECIPE = "POST_RECIPE"
export const GET_DETAIL = "GET_DETAIL"

export function getDetail(id){
  return async function(dispatch){
    let json = await axios.get('http://localhost:3001/recipe/'+ id);
     return dispatch({
          type: GET_DETAIL,
          payload: json.data
     })
 
}
}

export function getRecipes(){
    return async function (dispatch){
        //le va apedir a nuestra ruta del back los digimons
        //json se van a quedar todos nuestros perros
        let json = await axios.get('http://localhost:3001/recipes', {});
        return dispatch({
            type:GET_RECIPES,
            payload: json.data
        })
    }
}

export function getnameRecipes(name){
    return async function(dispatch){
      let json = await axios.get("http://localhost:3001/recipes?name="+name);
       return dispatch({
            type: GET_NAME_RECIPES,
            payload: json.data
       })
   
  }
}

export function getOrdenamientoRecipes(ordenamiento){
    return async function(dispatch){
      let json = await axios.get('http://localhost:3001/ordenamiento/'+ ordenamiento);
       return dispatch({
            type: GET_ORDER,
            payload: json.data
       })
   
  }
}

export function getOrdenamientoScore(ordenamientoScore){
  return async function(dispatch){
    let json = await axios.get('http://localhost:3001/ordenamientoScore/'+ ordenamientoScore);
     return dispatch({
          type: GET_ORDER_SCORE,
          payload: json.data
     })
 
}
}
export function filterByType(payload) {
    return {
      type: FILTER_BY_TYPE,
      payload
    };
  }

  export function getTypes() {
    return function (dispatch) {
        return fetch(`http://localhost:3001/types`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: GET_TYPES,
                    payload: json
                })
            })
    }
}
export function postRecipes(payload) {
  return async function (dispatch) {
      const json = await axios.post('http://localhost:3001/recipe', payload);
      return dispatch({
          type: POST_RECIPE,
          payload: json.data

      })
  }
}


