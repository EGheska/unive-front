import React, {useContext, useEffect, useState} from 'react';
import {Route, Router, Routes, useNavigate} from "react-router-dom";
import {employeeRoutes, routes, userRoutes} from "./util/routes";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import ProtectedRoute from "./components/protectedRoute";

const AppRouter = () => {
    const {userStore} = useContext(Context);
    console.log("USER " + userStore.isUser);
    console.log("AUTH " + userStore.isAuth);
    console.log("EMPLOYEE " + userStore.isEmployee);
    return (
        <Routes>
            {/* Public routes */}
            {
                !userStore.isAuth && routes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }
            {/*User Routes*/}
            {
                userStore.isUser && userStore.isAuth && userRoutes.map(({path, Component}) => (
                        <Route key={path} path={path} element={
                            <ProtectedRoute>
                                <Component/>
                            </ProtectedRoute>
                        }/>
                ))
            }
            {/*Employee routes*/}
            {
                userStore.isEmployee && userStore.isAuth && employeeRoutes.map(({path, Component}) => (
                        <Route key={path} path={path} element={
                            <ProtectedRoute>
                                <Component/>
                            </ProtectedRoute>
                        }/>
                ))
            }
        </Routes>
    )
}

export default observer(AppRouter);