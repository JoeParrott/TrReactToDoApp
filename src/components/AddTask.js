import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import Datepicker from 'react-datepicker';

const AddTask = (props) => {

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescrip, setNewDescrip] = useState('');
    const [isOpen, setIsOpen] = useState(true)
    const [newTaskDue, setDue] = useState(new Date());

    const handleNewTask = (event) => {
        setNewTaskTitle(event.target.value)
    };

    const handleTaskDescrip = (event) => {
        setNewDescrip(event.target.value)
    };

    const handleDueDate = (date) => {
        setDue(date);
        setIsOpen(false);
        // needs calendar interaction
    };


    const handleClose = () => {
        props.setShow(false);
    };

    const handleAddNewTask = () => {
        props.storeTask(newTaskTitle, newTaskDescrip, newTaskDue);
        handleClose();
    };

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Adding New Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <p>Add task title here:</p>
                            <textarea onChange={handleNewTask}>
                            </textarea>
                        </Col>
                        <Col>
                            <p>Add task description here:</p>
                            <textarea onChange={handleTaskDescrip}></textarea>
                        </Col>
                        <Col>
                            <p>Date due?</p>
                            <Datepicker
                                open={isOpen}
                                showPopperArrow={false}
                                selected={newTaskDue}
                                onChange={handleDueDate}
                                onInputClick={() => setIsOpen(true)}
                            />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleAddNewTask}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default AddTask;

//need to fix datepicker inside modal
//need to resize textareas and datepicker, style properly