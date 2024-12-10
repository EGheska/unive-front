import * as Routes from "./const";

import SignPage from "../pages/signPage.js"

export const routes = [
    {
        path: Routes.REGISTER_ROUTE,
        Component: SignPage
    },
    {
        path: Routes.LOGIN_ROUTE,
        Component: SignPage
    }
];

