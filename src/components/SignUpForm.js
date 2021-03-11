import config from '../config'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";


function SignUpForm(props) {
  const [locations, setLocations] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let mounted = true;
    axios
      .get(`${config.API_URL}/api/location`)
      .then((response) => {
        if (mounted) {
          setLocations(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => (mounted = false);
  }, []);

  return (
 
    <Form className="body-width" onSubmit={props.handleSubmit}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          required
          name="username"
          type="text"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control 
        name="name" type="text" placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
              value={name} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="lastName"
          type="text"
          placeholder="Enter last name"
          onChange={(e) => setLastName(e.target.value)}
              value={lastName}
        />
      </Form.Group>
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
          onChange={(e) => setPassword(e.target.value)}
              value={password}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>City</Form.Label>

        <Form.Control
          as="select"
          placeholder="Select your city"
          name="location"
          onChange={(e) => setLocation(e.target.value)}
              value={location}
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
export default SignUpForm;