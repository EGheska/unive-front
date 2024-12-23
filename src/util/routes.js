import * as Routes from "./const";

import SignPage from "../pages/signPage.js"
import HomePage from "../pages/HomePage";
import ClientNotificationPage from "../pages/clientNotificationPage";
import ClientPolicyPage from "../pages/clientPolicyPage";

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
        Component: ClientNotificationPage,
    },
    {
        path: Routes.POLICIES_ROUTE,
        Component: ClientPolicyPage,
    }
];

