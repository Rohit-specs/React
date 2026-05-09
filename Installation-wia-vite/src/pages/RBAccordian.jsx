import React, { Fragment, useContext } from 'react'
import { Card, useAccordionButton, AccordionContext } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { PlusCircle, DashCircle } from 'react-bootstrap-icons';
function CustomToggle({ children, eventKey }) {

    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );
    const { activeEventKey } = useContext(AccordionContext);

    return (

        <div className ={ `d-flex justify-content-between fs-4 ${eventKey === activeEventKey ?'text-primary':""}`} role='button' onClick={decoratedOnClick}><span className='fw-bolder'>{children} </span>
            {eventKey === activeEventKey ?  <DashCircle/> :<PlusCircle/>}

        </div>


    );
}

const RBAccordian = () => {


    return (
        <Accordion defaultActiveKey="1">
            <Card>
                <Card.Header className="p-3">
                    <CustomToggle eventKey="1">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header className="p-3">
                    <CustomToggle eventKey="2">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header className="p-3">
                    <CustomToggle eventKey="3">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}

export default RBAccordian