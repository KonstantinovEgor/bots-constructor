import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { HOME_ROUTE } from "../utils/consts";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";

const AppRouter = () => {
    const { user } = React.useContext(Context);

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Element }) => 
                <Route key={path} path={path} element={Element}/>
            )}

            {publicRoutes.map(({ path, Element }) => 
                <Route key={path} path={path} element={Element}/>
            )}

            <Route path="*" element={<Navigate to={HOME_ROUTE}/>}/>
        </Routes>
    );
}

export default AppRouter;