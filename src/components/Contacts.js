import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "./Contact";

const Contacts = (props) => {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        {props.contactsData.map((contact, id) => {
          return (
            <Contact
              contactInfo={contact}
              key={contact.id}
              deleteContact={props.deleteContact}
              editContact = {props.editContact}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Contacts;
