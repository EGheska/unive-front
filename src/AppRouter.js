import React, {useContext, useEffect, useState} from 'react';
import {Route, Router, Routes, useNavigate} from "react-router-dom";
import {routes, userRoutes} from "./util/routes";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

const AppRouter = () => {
    const {UserStore} = useContext(Context);
    console.log("USER " + UserStore.isUser);
    console.log("AUTH " + UserStore.isAuth);
    // let userState = UserStore.isAuth;
    return (
        <Routes>
            {
                !UserStore.isAuth && routes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }
            {
                UserStore.isAuth && userRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }
        </Routes>
    )
}

export default observer(AppRouter);