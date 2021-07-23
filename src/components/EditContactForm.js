import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class EditContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.contactInfo.name,
      phone: props.contactInfo.phone,
      email: props.contactInfo.email,
      location: props.contactInfo.location,
      id: props.contactInfo.id,
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editContact(this.state.id, this.state);
    this.setState({
      name: "",
      phone: "",
      email: "",
      location: "",
    });
    this.props.closeModal()
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
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
              value={this.state.phone}
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
              value={this.state.email}
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
              value={this.state.location}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onSubmit={this.handleSubmit}>
            Update
          </Button>
        </Form>
      </>
    );
  }
}
export default EditContactForm;
