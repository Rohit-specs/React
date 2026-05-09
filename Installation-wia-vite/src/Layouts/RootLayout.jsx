import { Link, Outlet, NavLink } from "react-router-dom";
import { SidebarLinksData, RbNonIntractive, RbIntractive } from "../data/SidebarLinksData";
import { Card, CardBody, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { ArrowRight } from 'react-bootstrap-icons';


function RootLayout() {
    return (
        <Container fluid="md"><Card>
            <Row>
                <Col md={3} className="bg-primary min-vh-100">
                    <CardBody>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>React Basic</Accordion.Header>
                                <Accordion.Body><ListGroup>

                                    {SidebarLinksData.map((item) => {
                                        return (<ListGroup.Item className="text-start" key={item.id}><Link to={item.links}>{<div className="icon-link"><ArrowRight />{item.menuItem}</div>}</Link></ListGroup.Item>)
                                    })}
                                </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>RB Non-interactive component</Accordion.Header>
                                <Accordion.Body><ListGroup>
                                    {RbNonIntractive.map((item) => {
                                        return (<ListGroup.Item className="text-start" key={item.id}><Link to={item.links}>{<div className="icon-link"><ArrowRight />{item.menuItem}</div>}</Link></ListGroup.Item>)
                                    })}</ListGroup>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>RB Interactive component</Accordion.Header>
                                <Accordion.Body><ListGroup>
                                    {RbIntractive.map((item) => {
                                        return (<ListGroup.Item className="text-start" key={item.id}><Link to={item.links}>{<div className="icon-link"><ArrowRight />{item.menuItem}</div>}</Link></ListGroup.Item>)
                                    })}</ListGroup>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </CardBody>
                </Col>
                <Col md={9}>
                    <CardBody>
                        <Outlet /></CardBody>
                </Col>

            </Row></Card></Container>
    )
}

export default RootLayout