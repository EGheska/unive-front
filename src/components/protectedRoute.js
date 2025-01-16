import React, {useContext} from "react";
import {Navigate, Outlet } from "react-router-dom";
import userStore from "../store/user_store.js";
import {routes} from '../util/routes';
import {Context} from "../index";

const ProtectedRoute = ({children}) => {
    const {userStore} = useContext(Context);
    console.log("USER STORE FROM PROTECTED ROUTE: ",userStore.isAuth);
    if (!userStore.isAuth) {
        return <Navigate to="/sign"/>;
    }
    return children;
};

export default ProtectedRoute;
