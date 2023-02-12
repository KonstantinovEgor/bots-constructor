import React, {useContext} from 'react';
import Container from "react-bootstrap/Container";

import { Context } from '../index';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {observer} from "mobx-react-lite";
import {Card} from "react-bootstrap";

import '../stylesheets/Profile.css';
import {HOME_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import {logOut} from "../http/authApi";

const Profile = observer(() => {
    const { user } = useContext(Context);
    const { login } = user.user || 'Не удалось получить';
    const navigate = new useNavigate();

    const logout = async() => {
        user.setUser({});
        user.setIsAuth(false);
        await logOut();
        navigate(HOME_ROUTE)
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="title">
                    Мой профиль
                </h2>
                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    <h4>
                        Ваш логин: <span className='login'>{login}</span>
                    </h4>
                </Row>
                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    <div>
                        <Button className={'logout'} onClick={() => logout()}  variant={"outline-success"}>
                            Выйти
                        </Button>
                    </div>
                </Row>
            </Card>
        </Container>
    )
});

export default Profile;