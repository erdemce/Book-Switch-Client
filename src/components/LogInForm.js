import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class LogInForm extends Component {

    render() {
          
        return (
                <div>
                <Form onSubmit={this.props.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" required type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" required  type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" size="lg" block type="submit">
                    Submit
                </Button>
               
                </Form> 
                </div>
           
        )
    }
}
