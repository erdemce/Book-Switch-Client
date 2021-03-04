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
          Welcome to Book Switch!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card.Img style={{width: "200px"}} src="assets/welcomepage.jpg" alt="Card image" />
    
          <p>
          You are now ready to switch books with other people in your community, creating a local book club which instead of buying the same book many times, will allow a book to be read by many others.  supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
          </p>
        </Modal.Body>
        <Modal.Footer>
        <Button><Link to="/profile">Start by Editing your Profile</Link></Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function Welcome() {
    const [modalShow, setModalShow] = React.useState(true);
  
    return (
      <>
        <WelcomePage    
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  
  

export default Welcome

