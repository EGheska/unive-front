import React, {useContext} from 'react';
import {Route, Router, Routes} from "react-router-dom";
import {routes, userRoutes} from "./util/routes";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

const AppRouter = () => {
    const {UserStore} = useContext(Context);
    console.log("USER" + UserStore.isUser);
    let userState = UserStore.isAuth;
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
        </Routes>
    )
}

export default observer(AppRouter);