import Admin from "./pages/Admin"; 
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Profile from  "./pages/Profile";
import MyBots from "./pages/MyBots";
import BotCreating from "./pages/BotCreating";

import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    HOME_ROUTE,
    PROFILE_ROUTE,
    MY_BOTS_ROUTE,
    BOT_CREATING
} from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: <Admin/>
    },
    {
        path: PROFILE_ROUTE,
        Element: <Profile/>
    },
    {
        path: MY_BOTS_ROUTE,
        Element: <MyBots/>
    },
    {
        path: BOT_CREATING,
        Element: <BotCreating/>
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