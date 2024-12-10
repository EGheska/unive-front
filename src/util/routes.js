import * as Routes from "./const";

// import * as Pages from "../pages/"
import {signPage} from "../pages/signPage.js"

export const AuthRoutes = [
    {
        path: Routes.REGISTER_ROUTE,
        Component: signPage
    },
];

export const PublicRoutes = [

];