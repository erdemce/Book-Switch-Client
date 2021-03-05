import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
let locData = require("./cities");

export default class SignUpForm extends Component {
  state = {
    cities:locData.sort((loc1,loc2)=>(loc1.city>loc2.city)?1:-1)
  };



  render() {
    
    const { cities} = this.state;

    return (
      <Form onSubmit={this.props.handleSubmit}>
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
            {cities.map((loc, index) => {
              return (
                <option key={index} value={loc}>
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