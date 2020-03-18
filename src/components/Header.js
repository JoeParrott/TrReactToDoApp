import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Header.css';


function Header() {
    return (
        <Container>
            <Row className='align-items-centre'>
                <Col md={6}>
                    <h2 className='rounded text-light bg-secondary p-3 mt-2'>Joe's ToDo List</h2>
                    <Row>
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
                <Col md={6}>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;