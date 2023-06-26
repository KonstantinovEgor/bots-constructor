import React, {useCallback, useContext, useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createBot } from "../http/botCreatingApi";

import { MY_BOTS_ROUTE } from "../utils/consts";

import { Context } from "../index";

const BotCreating = () => {
    const config_example = { "messages": [ { "user_message": "test", "answer": [ { "message_type": "message", "value": "test succes passed 1" } ] }, { "user_message": "test 2", "answer": [ { "message_type": "message", "value": "test 2 succes passed 1" }, { "message_type": "message", "value": "test 2 succes passed 2" } ] }, { "user_message": "/help", "answer": [ { "message_type": "options", "value": "options", "options_config": { "inline_keybord": [ [ { "text": "Кнопка 1", "callback_data": "test_btn_1" }, { "text": "Кнопка 2", "callback_data": "test_btn_2" } ], [ { "text": "Кнопка 3", "callback_data": "test_btn_3" }, { "text": "Кнопка 4", "callback_data": "test_btn_4" } ] ] } } ] } ], "commands": [ { "command": "/start", "description": "Начать, бот 2" }, { "command": "/help", "description": "Доступные команды" } ] };

    const navigate = new useNavigate();

    const { user } = useContext(Context);
    const user_id = user.user.id;

    const [ token, setToken ] = useState("");
    const [ config, setConfig ] = useState(JSON.stringify(config_example));

    const clickOnBtn = async () => {
        if (config === '') await createBot(user_id, token, (config) ? config: config_example);
        else await createBot(user_id, token, JSON.parse(config));

        navigate(MY_BOTS_ROUTE)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600, 'max-height': 500}} className="p-5">
                <h2 className="m-auto">Создание бота</h2>
                <Button className="mt-5 batn_two" onClick={() => handleShow()} variant={"outline-success"}>
                    Создать
                </Button>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Создание бота</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Токен телеграм бота</Form.Label>
                            <Form.Control
                                placeholder="Можно получить у BotFather"
                                autoFocus
                                value={token}
                                onChange={ e => setToken(e.target.value) }
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                            >
                            <Form.Label>Конфигурация бота</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                onChange={ e => setConfig(e.target.value) }
                                value={config}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={clickOnBtn}>
                        Создать
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default BotCreating;