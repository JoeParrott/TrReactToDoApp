import React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';

const Validation = (props) => {

    const handleClose = () => {
        props.handleValidationOpen(false);
    }

    const handleCompleted = () => {
        console.log("handle completed started")
        props.completeClick();
        //need a delay or a .then here to let code run in app
        props.completeTask(props.taskID);
        props.deleteTask(props.taskID)
        props.handleValidationOpen(false);
        console.log("handle completed ended")
    }


    return (
        <Modal
            {...props}
            size="sm"
            show={props.validationOpen}
            onHide={handleClose}
            aria-labelledby="validation-modal"
        >
            <Modal.Header>
                <Modal.Title id="validation-modal">
                    Are You Sure?
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button className="btn btn-primary" onClick={handleCompleted} >Yes</Button>
                <Button className="btn btn-secondary" onClick={handleClose}>Cancel</Button>
            </Modal.Body>
        </Modal>
    )
}

export default Validation