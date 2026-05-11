import React from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import { Bell, BoxArrowRight, ChevronDown, Gear, Person, Speedometer2 } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';

const RBDropdown = () => {
  return (
    <Row>
        <Col md={4}>
     <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic" className='icon-link'>
        <Person/> Profile
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#" className='icon-link'><Speedometer2/>Dashboard</Dropdown.Item>
        <Dropdown.Item href="#" className='icon-link'><Bell/>Notification</Dropdown.Item>
        <Dropdown.Item href="#" className='icon-link'><Gear/>Setting</Dropdown.Item>
        <Dropdown.Item href="#" className='icon-link'><BoxArrowRight/>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></Col>
        <Col md={4}>
     <Dropdown>
      <Dropdown.Toggle bsPrefix=' ' variant="primary" id="dropdown-basic" className='icon-link'>
        <Person/> Profile <ChevronDown/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#" className='icon-link'><Speedometer2/>Dashboard</Dropdown.Item>
        <Dropdown.Item href="#" className='icon-link'><Bell/>Notification</Dropdown.Item>
        <Dropdown.Item href="#" className='icon-link'><Gear/>Setting</Dropdown.Item>
        <Dropdown.Item href="#" className='icon-link'><BoxArrowRight/>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></Col>
        <Col md={4}>
     <Dropdown>
      <Dropdown.Toggle bsPrefix=' 'id="dropdown-basic" variant=' '>
        <Image src='https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg' className='w-25'/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#" className='icon-link'><Speedometer2/>Dashboard</Dropdown.Item>
        <Dropdown.Item href="#" className='icon-link'><Bell/>Notification</Dropdown.Item>
        <Dropdown.Item href="#" className='icon-link'><Gear/>Setting</Dropdown.Item>
        <Dropdown.Item href="#" className='icon-link'><BoxArrowRight/>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></Col>
    </Row>
  )
}

export default RBDropdown
