import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";


const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    //Devuelve un initialState
    return {
        logged: !!user, //Si se ha encontrado algo en "getItem(user)", esto será true.
        user: user,
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init)

    const login = (name = "") => {
        const user = { id: "0123456789", name: name }
        const action = { type: types.login, payload: user }
        localStorage.setItem("user", JSON.stringify(user))
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem("user");
        const action = { type: types.logout }
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            //...authState, //También se podría desestructurar, pero prefiero dejarlo así
            authState,
            login: login,
            logout: logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
}