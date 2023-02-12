import React, {useContext, useState} from "react";
import {Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {observer} from "mobx-react-lite";

import { Context } from "../index";
import {getAllMyTelegramBots} from "../http/userApi";
import Button from "react-bootstrap/Button";
import {HOME_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";

import '../stylesheets/MyBots.css';

const Admin = observer(() => {
    const { user } = useContext(Context);
    const user_id = user.user.id;

    const [Bots, ReloadMyBots] = useState('');

    const getMyBots = async () => {
        const bots = await getAllMyTelegramBots(user_id);
        if (bots.length === 0)
            ReloadMyBots(
                <div className='m-auto text-center'>
                    <h3 className='mt-5'>
                        У вас еще нет ботов
                    </h3>
                    <h4 className='mt-3'>
                        Создать нового можно <NavLink className="link_to_create" to={HOME_ROUTE}>тут</NavLink>
                    </h4>
                </div>
            )
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Мои боты</h2>
                {Bots}
                <Button className="mt-5" onClick={() => getMyBots()} variant={"outline-success"}>
                    Загрузить
                </Button>
            </Card>
        </Container>
    );
});

export default Admin;