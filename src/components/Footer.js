import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Footer(props) {
    const counter = () => {
        const completedTasks = props.completedCount;
        if (completedTasks !== 0) {
            return <h4 className='p-3 border rounded border-success border-2'>Well done completing {props.completedCount} tasks!</h4>
        }
        else {
            return <h4 className='p-3 border rounded border-success border-2'>Get to work you haven't done anything yet!</h4>
        };
    }

    return (
        <Container fluid>
            <Row className='p-4'>
                {counter}
            </Row>
        </Container>
    )
}

export default Footer;

// need to fix footer rendering, needs state