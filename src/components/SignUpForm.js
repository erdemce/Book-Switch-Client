import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Select from 'react-select-country-list'

export default class SignUpForm extends Component {
     
    render() {
    
        return (
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control  name="name" type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control  name="lastName" type="text" placeholder="Enter last name" />
                    </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  name="password"  type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select"  name="country">
                         <option>Choose your country</option>
                         <option value="Germany">Germany</option>
                         <option value="France">France</option>
                          </Form.Control >
                   
                    {/* <Select options={options} value={value} onChange={changeHandler} /> */}
                </Form.Group>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control as="select"  name="city" placeholder="Choose your city" />
                    {/* <Select options={options} value={value} onChange={changeHandler} /> */}
                    </Form.Group>
                <Button variant="primary" size="lg" block type="submit">
                    Submit
                </Button>
                </Form> 
           
        )
    }
}
