import { Link, Outlet, NavLink } from "react-router-dom";
import { SidebarLinksData } from "../data/SidebarLinksData";
import { Card, CardBody, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Accordion } from "react-bootstrap";


function RootLayout() {
    return (
        <Container fluid="md"><Card>
            <Row>
                <Col md={3} className="bg-primary min-vh-100">
                    <CardBody>
                        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>React bootstrap</Accordion.Header>
        <Accordion.Body><ListGroup>
                        {/* <li><NavLink className="text-light" to="/">Static Card</NavLink></li>
                        <li><NavLink className="text-light" to="/dynamic-app">Dynamic Card</NavLink></li>
                        <li><NavLink className="text-light" to="/counter-via-hooks">Counter</NavLink></li> */}
                        
                        {SidebarLinksData.map((item)=>{
                            return(<ListGroup.Item key={item.id}><Link  to={item.links}>{item.menuItem}</Link></ListGroup.Item>)
                        })}
                    </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                    </CardBody>
                </Col>
                <Col md={9}>
                        <CardBody>
                <Outlet/></CardBody>
                </Col>
            
       </Row></Card></Container>
    )
}

export default RootLayout