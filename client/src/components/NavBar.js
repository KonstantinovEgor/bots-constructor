import React from "react";
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

import { Context } from "../index";
import {
    HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, MY_BOTS_ROUTE
} from "../utils/consts";

import "../stylesheets/NavBar.css";


const NavBar = observer(() => {
    const { user } = React.useContext(Context);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className="logo" to={HOME_ROUTE}>Thend Group - Bots Constructor</NavLink>
                {!user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} variant={"outline-light"}>
                            <NavLink className="link_to" to={LOGIN_ROUTE}>Авторизация</NavLink>
                        </Button>
                        <Button className="reg-button" variant={"outline-light"}>
                            <NavLink className="link_to" to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                        </Button>
                    </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"}>
                        Создание бота
                    </Button>
                    <Button className="reg-button" variant={"outline-light"}>
                        <NavLink className="link_to" to={MY_BOTS_ROUTE}>Мои боты</NavLink>
                    </Button>
                    <Button className="reg-button" variant={"outline-light"}>
                        <NavLink className="link_to" to={PROFILE_ROUTE}>Профиль</NavLink>
                    </Button>
                </Nav>
                }
            </Container>
      </Navbar>
    );
});

export default NavBar;