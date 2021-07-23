import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      location: "",
      id: ""
    }
  }
  handleChange = (e) => {
      e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value 
    }); 
   
  };

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addContact(this.state)
      this.setState({
        name: "",
        phone: "",
        email: "",
        location: ""
      })
  }
  render() { 
    return (
      <>
        <Form style={{ marginTop: "30px", marginLeft: "30px" }} onSubmit={this.handleSubmit}>
            <div className="mb-2 text-muted"><h3>Add Contact Details</h3> </div>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
              value = {this.state.name}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              name="phone"
              onChange={this.handleChange}
              value = {this.state.phone}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
              value = {this.state.email}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Location"
              name="location"
              onChange={this.handleChange}
              value = {this.state.location}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
export default AddContactForm;
