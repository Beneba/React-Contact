import React, { useState } from "react";
import { Col, Card, Button, Modal } from "react-bootstrap";


import EditContactForm from "./EditContactForm";

const Contact = (props) => {

  const [show, setShow] = useState(false);  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteContact(props.contactInfo.id);
  };
  
  
  return (
    <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactForm
            contactInfo={props.contactInfo}
            editContact={props.editContact}
            closeModal ={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Col md="4">
        <Card>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              My Contact
            </Card.Subtitle>
            <Card.Title>Name: {props.contactInfo.name}</Card.Title>
            <Card.Text>
              <p>Phone: {props.contactInfo.phone} </p>
              <p>Email: {props.contactInfo.email}</p>
              <p>Location: {props.contactInfo.location} </p>
            </Card.Text>
            <Button variant="primary" size="sm" onClick={handleShow}>
              Edit
            </Button>{" "}
            <Button variant="danger" size="sm" onClick={handleDelete}>
              Delete
            </Button>{" "}
            <Button variant="success" size="sm" > 
              Call
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Contact;
