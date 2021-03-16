import config from '../config'
import React, { Component } from "react";
import { Card, Spinner } from "react-bootstrap";
import BookDetailsCard from "./BookDetailsCard";

export default class Profile extends Component {
 
  render() {
   
    const {
      userLibrary,
      user,
      handleDelete,
      showEditBookForm,
      showAddBookForm,
      showProfileForm,
      showPhotoForm
    } = this.props;

    if (!user) {
      return (
        <>
         <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="secondary" />
        </>
      );
    }

    return (
      <div className="body-width" >
        
        <h2>Hello {user.name}! <br></br>Welcome to your profile</h2>

        <Card className="text-center" style={{ width: "18rem", margin:"1em auto" }}>
          <Card.Img variant="top" src={user.photo} roundedCircle />
          <div>
            <img src="/assets/003-camera.png" style={{cursor: "pointer"}} onClick={showPhotoForm} alt="uploadphoto-icon"></img>
            <img
              style = {{cursor:"pointer"}}
              src="/assets/008-edition.png"
              alt="editprofile-icon"
              onClick={showProfileForm}
            ></img>
          </div>
          <Card.Body>
            <Card.Title>Your details</Card.Title>
            <table>
              <tbody>
                <tr><th>Username:</th><td>{user.username}</td></tr>
                <tr><th>Name:</th><td>{user.name}</td></tr>
                <tr><th>Last name:</th><td>{user.lastName}</td></tr>
                <tr><th>City:</th><td>{user.location.city}</td></tr>
                <tr><th>Email:</th><td>{user.email}</td></tr>
              </tbody>
            </table>
          </Card.Body>
          <Card.Footer>
            {/* <small className="text-muted">Last switch 3 weeks ago</small> */}
          </Card.Footer>


        </Card>
        <div>
          <img src="/assets/library.png" alt="libraryicon"></img>
        </div>

        {!userLibrary.length && <h1>You have no books yet in your Library</h1>}
        <img
          style={{cursor: "pointer"}}
          src="/assets/026-library-2.png"
          alt="addbook-icon"
          onClick={()=>showAddBookForm({})}
        ></img>

        {userLibrary.map((book) => {
          return (
            <BookDetailsCard
              key={book._id}
              handleDelete={(event) => {
                handleDelete(book._id, event);
              }}
              showEditBookForm={showEditBookForm}
              user={user}
              book={book}
            />
          );
        })}
      </div>
    );
  }
}
