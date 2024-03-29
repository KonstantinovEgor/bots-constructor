import React, {useCallback, useContext, useEffect, useState} from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from  "react-bootstrap/Button";
import {Alert} from "react-bootstrap";

import "../stylesheets/Auth.css";
import { REGISTRATION_ROUTE, LOGIN_ROUTE, HOME_ROUTE } from "../utils/consts";
import { logIn, registration } from "../http/authApi";

import { Context } from "../index";

const Auth = observer(() => {
    const { user } = useContext(Context);
    const navigate = new useNavigate();
    const isLoginPage = useLocation().pathname === LOGIN_ROUTE;

    const [ login, setLogin ] = useState("");
    const [ password, setPassword ] = useState("");

    const [ErrorMessage, UpdateErrorMessage] = useState("");

    const clickOnBtn = async () => {
        let data;
        try {
            if (isLoginPage)
                data = await logIn(login, password);
            else
                data = await registration(login, password);
            user.setUser(data);
            user.setIsAuth(true);
            navigate(HOME_ROUTE);
        } catch (error) {
            ThrowErrorMessage(error)
        }
    }

    const [showElement, setShowElement] = React.useState(true)
    // useEffect(()=> {
    //     setTimeout(function() {
    //         setShowElement(false)
    //     }, 5000);
    // });

    const ThrowErrorMessage = (error) => {
        setShowElement(true)
        UpdateErrorMessage(
            <Alert key="danger" variant="danger" className="error-message">
                {error.response.data.message}
            </Alert>
        );
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
                        type="password"
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
                                <Button onClick={clickOnBtn}  variant={"outline-success"}>
                                    Войти
                                </Button>
                            </div>
                        ) : (
                            <div className="button-reg">
                                <Button onClick={clickOnBtn} variant={"outline-success"}>
                                    Регистрация
                                </Button>
                            </div>
                        ) }
                    </Row>
                </Form>
                {showElement? <div>{ErrorMessage}</div>  : ''}
            </Card>
        </Container>
    );
});

export default Auth;