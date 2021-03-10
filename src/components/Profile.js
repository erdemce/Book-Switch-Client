import React, { Component } from "react";
import { Card, Spinner } from "react-bootstrap";
import axios from "axios";
import EditProfile from "./EditProfile";
import BookDetailsCard from "./BookDetailsCard";
import BookForm from "./BookForm";
import UploadPhotoForm from "./UploadPhotoForm";

export default class Profile extends Component {
  state = {
    addFormShow: false,
    profileFormShow: false,
    showUploadPhotoForm: false
  };


  onHide = () => {
    this.setState({ addFormShow: false });
  };

  handleProfileChange = (event) => {
      event.preventDefault();

      let username = event.target.username.value
      let name = event.target.name.value
      let lastName = event.target.lastName.value
      let location = event.target.location.value 
      let _id=this.props.user._id
      let updatedUser = {username, name, lastName, location,_id}
      // let cloneUser = JSON.parse(JSON.stringify(this.props.user))

      axios
      .post(`http://localhost:5005/api/auth/user`, updatedUser, {
        withCredentials: true,
      })
      .then((response) => {    
          this.props.history.push(`/profile`);
      })     
      .catch((err) => {
        console.log("Something went wrong", err);
      });

    }




 
  render() {
    const { addFormShow, profileFormShow, showUploadPhotoForm } = this.state;
    const {
      userLibrary,
      user,
      handleDelete,
      handleEditBook,
      handleProfileChange,
      handleAddBook,
      handlePhoto
    } = this.props;

    if (!user) {
      return (
        <>
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="light" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="light" />
        </>
      );
    }

    return (
      <div className="body-width" >
        {addFormShow && (
          <BookForm
            show={addFormShow}
            onHide={this.onHide}
            book={{}}
            handleAddorEditBook={handleAddBook}
          />
        )}
        {showUploadPhotoForm && (
          <UploadPhotoForm
            show={addFormShow}
            onHide={() => this.setState({ showUploadPhotoForm: false })}
            handlePhoto={handlePhoto}
          />
        )}
        <h2>Hello {user.name}! <br></br>Welcome to your profile</h2>

        <Card className="text-center" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={user.photo} roundedCircle />
          <div>
            <img src="/assets/003-camera.png" style={{cursor: "pointer"}} onClick={() => this.setState({ showUploadPhotoForm: true })} alt="uploadphoto-icon"></img>
            <img
              style = {{cursor:"pointer"}}
              src="/assets/008-edition.png"
              alt="editprofile-icon"
              onClick={() => this.setState({ profileFormShow: true })}
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

          {profileFormShow && (
            <EditProfile
              show={profileFormShow}
              user={user}
              handleProfileChange={handleProfileChange}
              onHide={() => this.setState({ profileFormShow: false })}
            />
          )}
        </Card>
        <div>
          <img src="/assets/library.png" alt="libraryicon"></img>
        </div>

        {!userLibrary.length && <h1>You have no books yet in your Library</h1>}
        <img
          style={{cursor: "pointer"}}
          src="/assets/026-library-2.png"
          alt="addbook-icon"
          onClick={() => this.setState({ addFormShow: true })}
        ></img>

        {userLibrary.map((book) => {
          return (
            <BookDetailsCard
              key={book._id}
              handleDelete={(event) => {
                handleDelete(book._id, event);
              }}
              handleEditBook={(event) => {
                handleEditBook(book._id, event);
              }}
              user={user}
              book={book}
            />
          );
        })}
      </div>
    );
  }
}
