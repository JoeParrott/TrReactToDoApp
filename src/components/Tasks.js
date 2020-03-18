import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

function Tasks() {
    return (
        <Container fluid>
            <Row className='p-4'>
                <Col md={3}>
                    <p>Placeholder text about a tasks title</p>
                </Col>
                <Col md={5}>
                    <p>More Placeholder text about a tasks descrip.</p>
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