import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from  "react-bootstrap/Button";

import "../stylesheets/Auth.css";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { login, registration } from "../http/authApi";

const Auth = () => {
    const isLoginPage = (useLocation().pathname === LOGIN_ROUTE) ?
        true : false;

    const { login, setLogin } = useState("");
    const { password, setPassword } = useState("");

    const clickOnBtn = async () => {
        if (isLoginPage)
            return await login(login, password);
        else
            return await registration(login, password);
    }

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto"> { isLoginPage ? "Авторизация" : "Регистрация" } </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-5"
                        placeholder="Введите ваш логин"
                        value={login}
                        onChange={ e => setLogin(e.target.value) }
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль"
                        value={password}
                        onChange={ e => setPassword(e.target.value) }
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        { isLoginPage ? (
                            <div className="text-link-to">
                                Нет аккаунта? <NavLink className="decor-none" to={REGISTRATION_ROUTE}> 
                                    Зарегистрируйся!
                                </NavLink>
                            </div>
                        ) : (
                            <div className="text-link-to">
                                Есть аккаунт? <NavLink className="decor-none" to={LOGIN_ROUTE}> 
                                    Войдите!
                                </NavLink>
                            </div>
                        ) }
                        { isLoginPage ? (
                            <div className="button-login">
                                <Button click={clickOnBtn()}  variant={"outline-success"}>
                                    Войти
                                </Button>
                            </div>
                        ) : (
                            <div className="button-reg">
                                <Button click={clickOnBtn()} variant={"outline-success"}>
                                    Регистрация
                                </Button>
                            </div>
                        ) }
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;