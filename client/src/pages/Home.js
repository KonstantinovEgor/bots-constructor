import React from "react";
import Container from "react-bootstrap/Container";
import {Card} from "react-bootstrap";

import '../stylesheets/Home.css';

const Home = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 650}} className="p-5">
                <h2 className='m-auto'>
                    Thend Bots Constructor
                </h2>
                <h4 className='description'>
                    Сервис для конструирования телеграм ботов
                </h4>
            </Card>
        </Container>
    );
}

export default Home;