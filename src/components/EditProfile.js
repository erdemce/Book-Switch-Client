import React from 'react'
import { Button, Modal, Form} from 'react-bootstrap'


function EditProfile(props) {
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
          <Form onSubmit={props.handleProfileChange}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" required type="text" placeholder="Enter username" value={props.user.username} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter your name"  value={props.user.name}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" type="text" placeholder="Enter your last name"  value={props.user.lastName} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control name="location" required type="text" placeholder="Enter your city" value={props.user.location.city}/>
                </Form.Group>
                <Button variant="primary" size="lg" block type="submit">
                  Save Changes
                </Button>
                <Button onClick={props.onHide}>Close</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    );
  }


function ShowEditProfile(props) {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <>
      <EditProfile   
        user={props.user}
        handleFirstEdit={props.handleFirstEdit}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ShowEditProfile