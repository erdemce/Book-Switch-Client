import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class LogInForm extends Component {
     
    render() {
          
        return (
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form> 
           
        )
    }
}
