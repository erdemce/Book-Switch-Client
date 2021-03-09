import React, { Component } from "react";
import { Card, Spinner } from "react-bootstrap";
import axios from "axios";
import EditProfile from "./EditProfile";
import AddBookForm from "./BookForm";
import AddBook from "./BookForm";
import BookDetailsCard from "./BookDetailsCard";
import BookForm from "./BookForm";

export default class Profile extends Component {
  state = {
    addFormShow: false,
    profileFormShow:false,
  };


  onHide=()=>{
 
    this.setState({addFormShow:false})
}


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
        }    
        )     
      .catch((err) => {
        console.log("Something went wrong", err);
      });

    }

 

  render() {
    const { addFormShow, profileFormShow} = this.state;
    const {  userLibrary, user, handleDelete, handleEditBook , handleAddBook} = this.props;

    if (!user) {
      return (
        <>
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
        </>
      );
    }

    return (
      <div>
      {addFormShow&&<BookForm show={addFormShow} onHide={this.onHide} book={{}} handleAddorEditBook={handleAddBook}/> }
        <h2>
          Hello {user.name}! <br></br>Welcome to your profile
        </h2>
        <Card className="text-center" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={user.photo} roundedCircle />
          <div>
            <img src="/assets/003-camera.png" alt="uploadphoto-icon"></img>
            <img
              src="/assets/008-edition.png"
              alt="editprofile-icon"
              onClick={() => this.setState({ profileFormShow: true })}
            ></img>
          </div>
          <Card.Body>
            <Card.Title>Your details</Card.Title>
            <table>
              <tbody>
                <tr>
                  <th>Username:</th>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <th>Name:</th>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <th>Last Name:</th>
                  <td>{user.lastName}</td>
                </tr>
                <tr>
                  <th>City:</th>
                  <td>{user.location.city}</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>{user.email}</td>
                </tr>
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
              onSubmit={this.handleProfileChange}
              onHide={() => this.setState({ profileFormShow: false })}
            />
          )}
        </Card>
        <div>
          <img src="/assets/library.png" alt="libraryicon"></img>
        </div>

        {!userLibrary.length && <h1>You have no books yet in your Library</h1>}
        <img
          src="/assets/026-library-2.png"
          alt="addbook-icon"
          onClick={() => this.setState({ addFormShow: true })}
        ></img>
        {/* {modalShow && (
          <BookForm
            onSubmit={this.handleBookAdd}
            onHide={() => this.setState({ modalShow: false })}
          />
        )} */}
        {userLibrary.map((book) => {
          return (
            <BookDetailsCard key={book._id}
              handleDelete={(event)=>{
    
                handleDelete(book._id,event);
    }}
              handleEditBook={(event)=>{
    
                handleEditBook(book._id,event);
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
