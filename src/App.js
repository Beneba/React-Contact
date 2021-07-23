import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Contacts from "./components/Contacts";
import AddContactForm from "./components/AddContactForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "Bless Afetsi",
          phone: "0249175700",
          email: "ben@gmail.com",
          location: "Accra",
          id: "65699fks",
        },
        {
          name: "Shalom Kwame",
          phone: "005556698",
          email: "shalom@gmail.com",
          location: "Kumasi",
          id: "2b09jvvmvr",
        },
        {
          name: "Yaw Mensah",
          phone: "0695664525",
          email: "Yaw@gmail.com",
          location: "Tema",
          id: "4kmbo43342",
        },
      ],
    };
  }
  addNewContact = (contact) => {
    contact.id = Math.random().toString();
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  deleteContact = (id) => {
    const safeContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: safeContacts,
    });
  };
  editContact = (id, updatedContact) => {
    this.setState({
      contacts: this.state.contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      ),
      
    });
    
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md="4">
            <AddContactForm addContact={this.addNewContact} />
          </Col>
          <Col>
            <Contacts
              contactsData={this.state.contacts}
              deleteContact={this.deleteContact}
              editContact={this.editContact}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
