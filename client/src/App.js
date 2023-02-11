import React, {useContext, useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import {observer} from "mobx-react-lite";

import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

import { Context } from "./index";
import { auth } from "./http/authApi";

const App = observer(() => {
    const { user } = useContext(Context);
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        auth()
            .then(data => {
                user.setUser(true);
                user.setIsAuth(true);
            })
            .finally(() => setLoading(false));
    }, [])

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
