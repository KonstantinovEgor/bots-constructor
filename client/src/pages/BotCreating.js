import React, { useState } from "react";
import {Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const BotCreating = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const config_example = `{\n\tmessages: [\n\t\tuser_message: 'example', \n\t\tbot_answer: [ \n\t\t\t{\n\t\t\t\tmessage_type: 'message',\n\t\t\t\tvalue: 'example' \n\t\t\t} \n\t\t]\n\t]\n}`;

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
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                            >
                            <Form.Label>Конфигурация бота</Form.Label>
                            <Form.Control as="textarea" rows={3} defaultValue={config_example}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Создать
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default BotCreating;