import Admin from "./pages/Admin"; 
import Auth from "./pages/Auth";
import Home from "./pages/Home";

import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    HOME_ROUTE
} from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: <Admin/>
    }
];

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Element: <Home/>
    },
    {
        path: LOGIN_ROUTE,
        Element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Element: <Auth/>
    }
];