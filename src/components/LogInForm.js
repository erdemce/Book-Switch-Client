import React, {useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LogInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Form className="body-width" onSubmit={props.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
              value={password}
        />
      </Form.Group>
      {props.error&&(<h4 className="error">{props.error.message}</h4>)}
        <Button variant="primary" size="lg" block type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LogInForm;
