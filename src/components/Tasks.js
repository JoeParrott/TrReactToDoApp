import React from 'react';
import { Modal, Container, Button, Row, Col } from 'react-bootstrap';

function Tasks(props) {
    return (
        <Container fluid>
            <Row className='p-4'>
                <Col md={3}>
                    <p>{props.todoTitle}</p>
                </Col>
                <Col md={5}>
                    <p>{props.todoDescrip}</p>
                </Col>
                <Col md={2}>
                <Button className='btn btn-success'>Completed</Button>
                </Col>
                <Col md={2}>
                <Button className='btn btn-danger'>Delete</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Tasks;