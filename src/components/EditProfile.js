import React from 'react'
import { Button, Modal} from 'react-bootstrap'


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
          <h4>Centered Modal</h4>
          <form onSubmit={props.handleProfileChange}>
            <div class="form-group">
                <label>Username</label>
                    <input type="text" name="username"  value={props.user.username} ></input>
                <label>Name</label>    
                    <input type="text" name="name" value={props.user.name}></input>
                <label>Last Name</label>    
                    <input type="text" name="lastName" value={props.user.lastName}></input>
                <label>City</label>    
                    <input type="text" name="location" value={props.user.location.city}></input>
                </div>
          <Button onClick={props.onHide}>Close</Button>
          <Button type="submit">Save Changes</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    );
  }

export default EditProfile