import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

const Tasks = (props) => {

   /* const handleContinue = () => {
        props.handleValidationOpen(true);
        if 
    } */

    const handleDelete = () => {
        props.markDelete(props.todoID);
    };

    const handleComplete = () => {
        props.markComplete(props.todoID);
    };

    const handleModalOpen = () => {
        props.setID(props.todoID);
        props.openValidatorModal();
    }

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
                    <Button className='btn btn-success' /*onClick={handleComplete}*/ onClick={handleModalOpen}>Completed</Button>
                </Col>
                <Col md={2}>
                    <Button className='btn btn-danger' onClick={handleDelete}>Delete</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Tasks;

// need to add modal validation form on clicking buttons complete/delete and sync with app.js
// need to learn how to limit number of visible entries and add dropdown or scroll functionality, whichever looks better