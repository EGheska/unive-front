import * as Routes from "./const";

import SignPage from "../pages/signPage.js"
import HomePage from "../pages/HomePage";
import clientNotificationPage from "../pages/clientNotificationPage";
import clientPolicyPage from "../pages/clientPolicyPage";

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
    {
        path: Routes.NOTIFICATION,
        Component: clientNotificationPage,
    },
    {
        path: Routes.POLICIES_ROUTE,
        Component: clientPolicyPage,
    }
];

