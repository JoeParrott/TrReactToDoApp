import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

const AddTask = (props) => {

    const [newTask, setNewTask] = useState('');
    const [newTaskDescrip, setNewDescrip] = useState('');
    const [completedTask, setCompleted] = useState(false);
    const [newTaskDue, setDue] = useState('');

    const handleNewTask = (event) => {
        setNewTask(event.target.value)
    };

    const handleTaskDescrip = (event) => {
        setNewDescrip(event.target.value)
    };

    const handleDueDate = (event) => {
        setDue(event.target.value)
    };

    const handleAddnewTask = () => {
        props.addNewTask(newTask, newTaskDescrip, newTaskDue)
    }


    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Adding New Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <p>Add task title here:</p>
                            <textarea id='newTask' name='newTask'onChange={handleNewTask}>
                            </textarea>
                        </Col>
                        <Col>
                            <p>Add task description here:</p>
                            <textarea id='newTaskDescrip' name='newTaskDescrip' onChange={handleTaskDescrip}></textarea>
                        </Col>
                        <Col>
                            <p>Date due?</p>
                            <textarea onChange={handleDueDate}></textarea>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleAddnewTask}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default AddTask;