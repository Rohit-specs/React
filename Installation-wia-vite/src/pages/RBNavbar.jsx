import React, { Fragment, useState } from 'react'
import { Container, Stack, Image, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './../assets/images/react.svg';
import { Globe , Envelope, Phone} from 'react-bootstrap-icons';

const RBNavbar = () => {
    const [showNav, setShowNav] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Image src={logo}></Image>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Services</Nav.Link>
                        <NavDropdown show={showNav} onMouseOver={() => setShowNav(true)} onMouseLeave={() => setShowNav(false)} title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Our Team
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Infrastucture</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Testimonials
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Stack direction='horizontal' gap={2} >
                        <Button variant='primary'>Login</Button>
                        <Button variant='outline-primary'>Sign Up</Button>
                        <Button variant='dark' onClick={handleShow}>Contract</Button>
                        <Offcanvas placement='end' show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Contact Us</Offcanvas.Title>

                            </Offcanvas.Header>
                            <Offcanvas.Body className='text-start'>
                                <h3 className='text-start'>We are here to help you!</h3>
                                <hr className='my-3' />
                                <h4 className='mb-3 text-start'>Indixpert</h4>
                                <h4 className='icon-link text-muted'><Globe /> Our Offices:</h4>
                                <p className=''><address className='text-start'>1: Hyderabad, Telengana, India</address></p>
                                <p className=''><address className='text-start'>2: Gurugram, Haryana, India</address></p>
                                <h4 className='icon-link text-muted'><Envelope /> Email</h4>
                                <a className='d-block text-start text-decoration-none my-2' href="mailto:contact@indixpert.com">contact@indixpert.com</a>
                                <h4 className='icon-link text-muted'><Phone /> Phone</h4>
                                <a className='d-block text-start text-decoration-none my-2' href="tel:+947788992897">(+91) 778 899 2897</a>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Stack>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default RBNavbar