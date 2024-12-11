import * as Routes from "./const";

import SignPage from "../pages/signPage.js"
import HomePage from "../pages/HomePage";

export const routes = [
    {
        path: Routes.LOGIN_ROUTE,
        Component: SignPage
    }
];

export const userRoutes = [
    {
        path: Routes.HOME_ROUTE,
        Component: HomePage,

    },
]

