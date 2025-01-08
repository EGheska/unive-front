import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserStore from "../store/user_store.js";

const ProtectedRoute = () => {
    const isSignedIn = UserStore.isAuth;

    return isSignedIn ? <Outlet /> : <Navigate to="/sign" />;
};

export default ProtectedRoute;
