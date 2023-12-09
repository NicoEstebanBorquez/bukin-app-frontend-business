import { types } from "../types/types"

/* 
El state sería algo así:
const initialState = {
    logged: false,
    username: nico123
}
*/
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state, //esto es por si el día de mañana se añaden más campos al state, a parte de "logged" y "name"
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false,
                //user: null //"user" se puede poner a null o directamente no ponerlo. 
            };

        default:
            return state;
    }
}