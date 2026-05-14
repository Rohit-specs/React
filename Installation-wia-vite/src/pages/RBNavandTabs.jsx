import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { Calendar, Clock, CurrencyRupee } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
const RBNavandTabs = () => {
  const handleChange = ()=>{
    
    
  }
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" onSelect={handleChange}>
      <Row>
        <Col sm={12}>
          <Nav>
            <Nav.Item>
              <Nav.Link eventKey="first">Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Project Scope</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Team Members</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="forth">Tasks</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Chat</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <div>
          <hr className='m-0' />
        </div>
        <Col sm={12}>
          <Tab.Content className='mt-3'>
            <Tab.Pane className='text-start' eventKey="first">
              <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nobis reiciendis consequatur adipisci dicta perferendis est? Fuga eaque hic, vero exercitationem quaerat, dolore incidunt culpa veritatis explicabo quis saepe neque.</p>
              <ListGroup variant="flush">
                <ListGroup.Item className='d-flex justify-content-between'><div className="icon-link"><Calendar className='text-primary'/> Start Date</div> 01 Jul, 2025</ListGroup.Item>
                <ListGroup.Item className='d-flex justify-content-between'><div className="icon-link"><Calendar className='text-primary'/> End Date</div> 31 Dec, 2026</ListGroup.Item>
                <ListGroup.Item className='d-flex justify-content-between'><div className="icon-link"><Clock className='text-primary'/> Estimate Time</div> 5 Months</ListGroup.Item>
                <ListGroup.Item className='d-flex justify-content-between'><div className="icon-link"><CurrencyRupee className='text-primary'/> Estimated Cost</div> <div className="icon-link"><CurrencyRupee/> 5,80,000</div></ListGroup.Item>
              </ListGroup>
            </Tab.Pane>
            <Tab.Pane className='text-start' eventKey="second">Second tab content</Tab.Pane>
            <Tab.Pane className='text-start' eventKey="third">third tab content</Tab.Pane>
            <Tab.Pane className='text-start' eventKey="forth">forth tab content</Tab.Pane>
            <Tab.Pane className='text-start' eventKey="fifth">fifth tab content</Tab.Pane>

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default RBNavandTabs
