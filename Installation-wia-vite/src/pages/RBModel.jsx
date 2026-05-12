import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Envelope} from 'react-bootstrap-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
const RBModel = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" className='icon-link' onClick={handleShow}>
        <Envelope/> Subscribe
      </Button>

      <Modal show={show} onHide={handleClose} className=''>
        <Modal.Header closeButton>
          <Modal.Title className='fs-3'>Don't miss out</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p
          className='text-start'>Signup for our newsletter to stay upto date.</p>
          <InputGroup className="mb-3">
        
        <Form.Control
        className='text-start'
          placeholder="Enter your email address"
          aria-label="user email"
          aria-describedby="basic-addon1"
        /><InputGroup.Text id="basic-addon1" role='button'>Subscribe</InputGroup.Text>
      </InputGroup>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default RBModel
