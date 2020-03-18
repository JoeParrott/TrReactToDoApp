import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import './Header.css';


function Header() {
    return (
        <Container fluid>
            <Row className='align-items-centre'>
                <Col md={6}>
                    <h2 className='rounded text-light bg-secondary p-3 mt-2'>Joe's ToDo List</h2>
                    <Row className='p-5'>
                        <Col md={4}>
                        <Button type="button" className="btn btn-dark">Add New Task</Button>
                        </Col>
                        <Col md={4}>
                        <Button type="button" className="btn btn-dark">Change Timezone</Button>
                        </Col>
                        <Col md={4}>
                        <Button type="button" className="btn btn-dark">Change Theme</Button>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className='p-2'>
                    <Calendar />
                </Col>
            </Row>
        </Container>
    )
}

export default Header;