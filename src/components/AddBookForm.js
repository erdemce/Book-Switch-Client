import React from 'react'
import {Button, Modal, Form} from 'react-bootstrap'

function  AddBookForm(props) {
 
    return (
     
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h2>Add a new book to your Library!</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="hor-ver-2">
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" required type="text" placeholder="Enter title" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control name="author" required type="text" placeholder="Enter author(s)" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" type="text" placeholder="Enter description" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Language</Form.Label>
              <Form.Control name="language" type="text" placeholder="Enter language" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control name="category" required type="text" placeholder="Enter category" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Switch Mode</Form.Label>
              <Form.Control name="switchMode" required type="text" placeholder="Enter Switch Mode" />
            </Form.Group>
            <Button variant="primary" size="lg" block type="submit">
              Add Book to Library
            </Button>     
            <Button onClick={props.onHide}>Close</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  
  function AddBook(props) {
    const [modalShow, setModalShow] = React.useState(true);
  
    return (
      <>
        <AddBookForm   
          handleBookAdd={props.handleBookAdd}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  
  

export default AddBook

