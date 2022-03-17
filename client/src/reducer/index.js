import {
    GET_RECIPES,
    GET_NAME_RECIPES,
    FILTER_BY_TYPE,
    GET_TYPES,
    GET_ORDER,
    GET_ORDER_SCORE,
    POST_RECIPE,
    GET_DETAIL
} from "../actions"

// //==== Setear Estado Global Inicial ======//
const initialState = {
    recipes: [],
    diets: [],
    allrecipes: [],
    detail: []
}
// //==== Setear Reducers ======//
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                allrecipes: action.payload,
            }
        case GET_NAME_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        case GET_TYPES:
            return {
                ...state,
                diets: action.payload,
            }
        case FILTER_BY_TYPE:
            const allrecipes = state.allrecipes;
            const DietsFilter = action.payload === 'all' ? allrecipes : allrecipes.filter(el => el.diets.includes(action.payload))

            return {
                ...state,
                recipes: DietsFilter,
            }
        case GET_ORDER:
            return{
                ...state,
                recipes: action.payload,
            }
        case GET_ORDER_SCORE:
            return{
                ...state,
                recipes:action.payload,
            }
        case POST_RECIPE:
            return {
                ...state,
            }
        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload,
            }
        default:
            return state

    }

}
export default rootReducer;