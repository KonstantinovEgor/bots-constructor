import React from "react";
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";

import { Context } from "../index";
import {
    HOME_ROUTE
} from "../utils/consts";

const NavBar = () => {
    const { user } = React.useContext(Context);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={HOME_ROUTE}>Thend BotsConstructor</NavLink>
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"}>Авторизация</Button>
                    <Button className="ml-10px"variant={"outline-light"}>Регистрация</Button>
                </Nav>
            </Container>
      </Navbar>
    );
}

export default NavBar;