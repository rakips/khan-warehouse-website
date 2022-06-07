import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Spinner from "../../Spinner/Spinner";

const RequiredAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    // refreshing problem fixed here
    if (loading) {
        return <Spinner></Spinner>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }

    return children;
};

export default RequiredAuth;