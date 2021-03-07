import React, { Component } from 'react'
import {Card, Button, CardDeck, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ShowEditProfile from "./EditProfile"
import BookCard from './BookCard'
import AddBookForm from './AddBookForm'
import AddBook from './AddBookForm'


export default class Profile extends Component {

    state = {
        user: {username: "ArSmith",
        name: "Arthur",
        lastName: "Simith",
        email: "arthur@berlin.com",
        password: "guantanamera",
        location:{city:"berlin"} , 
        modalShow: false,
        photo: "https://images.unsplash.com/photo-1535467269829-2959b350bdb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=849&q=80"
      },
      userLibrary: []
    }
    
    // componentDidMount(){
      
        
    //     // axios.get(`http://localhost:5005/api/auth/user`)
    //     //   .then((response) => {
    //     //     this.setState({
    //     //       user: response.data
    //     //     })
    //     //   })
    //     //   .catch(() => {
    //     //     console.log('Detail fetch failed')
    //     //   })
    //   }

    // axios.get(`http://localhost:5005/api/book`)
    //     .then((response)=> {
    //         if (user._id === response.data.book.owner){
    //         this.setState({
    //             userLibrary: response.data
    //         })
    //     } else 
    //     })

    handleProfileChange = (event) => {
        let username = event.target.username.value
        let name = event.target.name.value
        let lastName = event.target.lastName.value
        let city = event.target.city.value
        let updatedUser = {username, name, lastName, city}
        // let cloneUser = JSON.parse(JSON.stringify(this.state.user))

        this.setState({
          user: updatedUser
        })
      }

    // handleAddBook = (event) => {

    // }


    render() {

        const {user, modalShow} = this.state
        return (
            <div>
                <h2>Hello {user.name}! <br></br>Welcome to your profile</h2>
                <Card className="text-center" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={user.photo} roundedCircle/>
                    <Card.ImgOverlay variant="bottom">
                    <img src='/assets/003-camera.png' alt="uploadphoto-icon"></img>
                    <img src='/assets/033-delete-5.png' alt="deletephoto-icon"></img>
                    </Card.ImgOverlay>
                    <Card.Body>
                    <Card.Title>Your details</Card.Title>
                    <table>
                        <tbody>
                        <tr><th>Username:</th><td>{user.username}</td></tr>
                        <tr><th>Name:</th><td>{user.name}</td></tr>
                        <tr><th>Last Name:</th><td>{user.lastName}</td></tr>
                        <tr><th>City:</th><td>{user.location.city}</td></tr>
                        <tr><th>Email:</th><td>{user.email}</td></tr>
                        </tbody>
                    </table>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last switch 3 weeks ago</small>
                    </Card.Footer>
                    <div class="div-button">
                        <img src='/assets/008-edition.png' alt="editprofile-icon" onClick={() =>this.setState({modalShow:true})}></img>
                        {modalShow && (<ShowEditProfile user={user} onSubmit={this.handleProfileChange} onHide={() => this.setState({modalShow:false})}/>)}                 
                    </div>
                </Card>

                {this.state.userLibrary.length ? (<div><img src="/assets/023-library" alt="libraryicon"></img><br></br><h1>Your Library</h1></div>) : (<h1>You have no books yet in your Library</h1>) }
                <img src='/assets/026-library-2.png' alt="addbook-icon" onClick={() =>this.setState({modalShow:true})}></img>
                        {modalShow && (<AddBook onSubmit={this.handleBookAdd} onHide={() => this.setState({modalShow:false})}/>)}            
                <CardDeck>
                    <Card className="text-center" style={{ width: '18rem' }}>
                        <Row>
                        <Col>
                        <Card.Img variant="top" src="/assets/book1.jpg" style={{ width: '10rem' }} />
                        </Col>
                        <Col>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Here we will map through your library to display your books in a CardDeck.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                        </Col>
                        </Row>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}


  
//   function App() {
//     const [modalShow, setModalShow] = React.useState(false);
  
//     return (
//       <>
        

//       </>
//     );
//   }
  
//   render(<App />);