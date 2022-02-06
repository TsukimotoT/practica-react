import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const VerificarUsuario = ({ children }) => {

    const { user } = useContext(UserContext)
    let location = useLocation()


    if (!user) {
        return <Navigate to="/" state={{ from: location }} />
    }

    return children
};

export default VerificarUsuario;
