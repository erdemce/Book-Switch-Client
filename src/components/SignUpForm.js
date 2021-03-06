import axios from "axios";
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class SignUpForm extends Component {
  state = {
    locations:[]
  };

  componentDidMount(){
    axios.get("http://localhost:5005/api/location")
      .then((response) => {

        this.setState({ locations: response.data})
      })
  }



  render() {
    
    const { locations} = this.state;

    return (
      <Form className="body-width"onSubmit={this.props.handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
          required
            name="username"
            type="text"
            placeholder="Enter username"
           
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter name"
           
           
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Enter last name"
           
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
           required
            name="email"
            type="email"
            placeholder="Enter email"
           
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
           required
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        


        <Form.Group>
          <Form.Label>City</Form.Label>

          <Form.Control
            as="select"
            placeholder="Select your city"
            name="location"
          >
            {locations.map((loc, index) => {
              return (
                <option key={index} value={loc._id}>
                  {loc.city}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" size="lg" block type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}