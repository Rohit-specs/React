import { Link, Outlet, NavLink } from "react-router-dom";
import { SidebarLinksData, RbNonIntractive, RbIntractive, Forms } from "../data/SidebarLinksData";
import { Badge, Card, CardBody, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { ArrowRight, Moon, Sun } from 'react-bootstrap-icons';
import { useEffect, useState } from "react";


function RootLayout() {
    const theme = localStorage.getItem("theme")
    const [darkMode, setDarkMode] = useState(theme==="dark"?true:false)
    useEffect(()=>{
        document.querySelector("html").setAttribute("data-bs-theme",darkMode?"dark":"light")
        localStorage.setItem("theme",darkMode?"dark":"light")
    },[darkMode])

    return (<>
        <Container fluid="lg">
            <div className="bg-secondary-subtle d-flex justify-content-between align-items-center px-3 rounded-bottom-3 mb-1">
                <h2>React Bootstrap</h2>
                <Badge className="rounded-circle bg-dark" onClick={()=>setDarkMode(!darkMode)}>{darkMode?<Sun height={27} size={20}/>:<Moon height={27} className="text-light" size={20}/>}</Badge>
            </div>
            <Card>
            <Row>
                <Col md={3} className="min-vh-100">
                    <CardBody className="bg-info-subtle
                     h-100">
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
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Forms</Accordion.Header>
                                <Accordion.Body><ListGroup>
                                    {Forms.map((item) => {
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

            </Row></Card></Container></>
    )
}

export default RootLayout