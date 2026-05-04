import { ListGroup, Card } from 'react-bootstrap';
import React from 'react'
import { Facebook, Instagram, Youtube, TwitterX, Linkedin } from 'react-bootstrap-icons'

const RBListGroup = () => {
    return (
        <Card style={{ maxWidth: 350 }} className='mx-auto mt-5'>
            <ListGroup variant='flush' className='p-2'>
                <h4 className='text-start'>Social Media Traffic</h4>
                <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                    <div className="icon-link"><Facebook className='text-primary' /><span>Facebook</span></div><p>20%</p></ListGroup.Item>
                <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                    <div className="icon-link"><Instagram className='text-primary' /><span>Instagram</span></div><p>20%</p></ListGroup.Item>
                <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                    <div className="icon-link"><Youtube className='text-primary' /><span>Youtube</span></div><p>20%</p></ListGroup.Item>
                <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                    <div className="icon-link"><TwitterX className='text-primary' /><span>TwitterX</span></div><p>20%</p></ListGroup.Item>
                <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                    <div className="icon-link"><Linkedin className='text-primary' /><span>Linkedln</span></div><p>20%</p></ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default RBListGroup
