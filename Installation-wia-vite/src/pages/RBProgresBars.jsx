import React, { Fragment, useState, useReducer } from 'react'
import { ProgressBar, Button, Card, Stack, Row, Col } from 'react-bootstrap'

const RBProgresBars = () => {
    function reducer(state, action) {
        switch (action.type) {
            case 'INCREMENT':
                return Math.min(state + 5, 100)
            case 'DECREMENT':
                return Math.max(state - 5, 0)
            default:
                return state
        }
    }
    const [progress, dispatch] = useReducer(reducer, 0)
    return (

        <Fragment>
            <Button onClick={() => dispatch({ type: "INCREMENT" })}>Progress +5%</Button>
            <Button onClick={() => dispatch({ type: "DECREMENT" })}>Progress -5%</Button>
            <div></div>
            <ProgressBar className='mt-3' now={progress} label={`${progress}%`} />
            <hr className='my-4' />
            <Card style={{ width: '20rem' }}><Card.Body>
                <Card.Title>Bootstrap Dashboard Application</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Web Development</Card.Subtitle>
                <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Card.Text>
                <ProgressBar className='mt-3' now={progress} label={`${progress}%`} />
                <div className='border-top mt-3'>
                    <Row className="text-center">
                        <Col className='p-3'>
                            <small className="text-muted">Due Date:</small>
                            <div>1 Jan, 2022</div>
                        </Col>

                        <Col className='p-3 border-start'>
                            <small className="text-muted">Budget:</small>
                            <div>$123,000</div>
                        </Col>
                    </Row>
                </div>

            </Card.Body></Card>

        </Fragment>
    )
}

export default RBProgresBars
