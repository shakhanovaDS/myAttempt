const SET_LOGGED = "SET_LOGGED"
const defaultState = {
    items: [],
    isFetching: true,
    logged: 0
}
export default function reposReducer(state = defaultState, action) {
    switch (action.type){
        case SET_LOGGED:
            return {
                ...state,
                logged: action.payload
            }
        default:
            return state
    }
}

export const setLogged = (logged) => ({type: SET_LOGGED, payload: logged})