import { useContext } from "react"
import { AuthContext } from "../../auth"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    const { authState } = useContext(AuthContext);
    console.log(authState)

    return (authState.logged)
        ? children //Si logged: true, muestra las rutas hijas (el children)
        : <Navigate to="/login" /> 
}
