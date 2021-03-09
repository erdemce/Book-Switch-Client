import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

function EditProfile(props) {
  const [locations, setLocations] = useState([]);
  const [name, setName] = useState(props.user.name);
  const [username, setUsername] = useState(props.user.username);
  const [lastName, setLastName] = useState(props.user.lastName);
  const [location, setLocation] = useState(props.user.location);

  useEffect(() => {
    let mounted = true;
    axios
      .get("http://localhost:5005/api/location")
      .then((response) => {
        if (mounted) {
          setLocations(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => (mounted = false);
  }, [])

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit your Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(event)=>{
          props.onHide();
          props.handleProfileChange(event)
        }}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              required
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
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
          <Button variant="primary" size="lg" type="submit">
            Save Changes
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default EditProfile;
