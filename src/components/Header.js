import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import './Header.css';
import AddTask from './AddTask'

const Header = (props) => {

    const [show, setShow] = useState(false);

    const storeTask = (title, descrip, date) => {
        const storedTask = {
            title: title,
            descrip: descrip,
            date: date
        };
        props.addNewTask(storedTask.title, storedTask.descrip, storedTask.date);
    };


    return (
        <Container fluid>
            <Row className='align-items-centre'>
                <Col md={6}>
                    <h2 className='rounded text-light bg-secondary p-3 mt-2'>Joe's ToDo List</h2>
                    <Row className='p-5'>
                        <Col md={4}>
                            <AddTask show={show}
                                setShow={setShow}
                                storeTask={storeTask} />
                            <Button type="button" className="btn btn-dark" onClick={() => setShow(true)}>Add New Task</Button>
                        </Col>
                        <Col md={4}>
                            <Button type="button" className="btn btn-dark">Change Timezone</Button>
                        </Col>
                        <Col md={4}>
                            <Button type="button" className="btn btn-dark">Change Theme</Button>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className='p-4'>
                    <Calendar />
                </Col>
            </Row>
        </Container>
    )
}

export default Header;

// need to mark react-calendar with tileContent (may need to find an icon to fill with) depending on taskdue as a visual indicator