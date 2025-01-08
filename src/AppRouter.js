import React, {useContext, useEffect, useState} from 'react';
import {Route, Router, Routes, useNavigate} from "react-router-dom";
import {employeeRoutes, routes, userRoutes} from "./util/routes";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import Header from "./components/header";

const AppRouter = () => {
    const {UserStore} = useContext(Context);
    console.log("USER " + UserStore.isUser);
    console.log("AUTH " + UserStore.isAuth);
    console.log("EMPLOYEE " + UserStore.isEmployee);
    return (
        <Routes>
            {
                !UserStore.isAuth && routes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }
            {
                UserStore.isUser && userRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }
            {
                UserStore.isEmployee && employeeRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }
        </Routes>
    )
}

export default observer(AppRouter);