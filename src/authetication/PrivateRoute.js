import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
    const user = useAuth();
    if (!user.token) return <Navigate to="/signin" />;
    return children;
};

export default PrivateRoute;
