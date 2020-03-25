import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

const AddTask = (props) => {
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
                            <textarea></textarea>
                            </Col>
                            <Col>
                            <p>Add task description here:</p>
                            <textarea></textarea>
                            </Col>
                            <Col>
                            <p>Date due?</p>
                            </Col>
                        </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button>Add</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            );
        };
export default AddTask;