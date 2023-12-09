import { useContext } from "react"
import { AuthContext } from "../../auth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {

    const { authState } = useContext(AuthContext);
   console.log(authState)

    return (!authState.logged)
        ? children
        : <Navigate to="/crear"/>
}