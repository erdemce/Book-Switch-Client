import React from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function WelcomePage(props) {
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
        <Card.Img
          style={{ width: "270px" }}
          src="assets/welcomepage.jpg"
          alt="Card image"
        />

        <div>
          <p>
            <span className="cl-1">Book</span>
            <span className="cl-2">Switch</span> is an app where you can switch
            books with other people in your city.
          </p>

          <p>Sign up and start switching!</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Link to={"/signup"}>
          <Button onClick={props.onHide}>Sign Up</Button>
        </Link>
        <Link to={"/login"}>
          <Button onClick={props.onHide}>Log In</Button>
        </Link>
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

export default Welcome;
