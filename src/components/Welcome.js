import React from 'react'
import {Card, Button, Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom';


function  WelcomePage(props) {
 
    return (
     
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h2>Welcome to Book Switch!</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="hor-ver-2">
        <Card.Img style={{width: "250px"}} src="assets/welcomepage.jpg" alt="Card image" />
    
          <div><p>
          You are now ready to switch books with other people in your community, creating a local book club which instead of buying the same book many times, will allow a book to be read by many others.  supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
          </p></div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleFirstEdit}>Start by Editing your Profile</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function Welcome(props) {
    const [modalShow, setModalShow] = React.useState(true);
  
    return (
      <>
        <WelcomePage   
          handleFirstEdit={props.handleFirstEdit}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  
  

export default Welcome

