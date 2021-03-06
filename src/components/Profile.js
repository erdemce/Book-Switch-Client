import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'
import EditProfile from "./EditProfile"


export default class Profile extends Component {

    state = {
        user: {username: "ArSmith",
        name: "Arthur",
        lastName: "Simith",
        email: "arthur@berlin.com",
        password: "guantanamera",
        location:{city:"berlin"} , 
        modalShow: false
      }
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


    render() {

        const {user, modalShow} = this.state
        return (
            <div>
                <h2>Hello {user.name}! Welcome to your profile</h2>
                <Card>
                    <Card.Img variant="top" src={user.photo} />
                    <Card.Body>
                    <Card.Title>Your details</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
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
                        <Link to='/addprofilephoto'><img width="100em"src="/images/add-user-photo.png" alt="edit-icon"></img></Link>
                        <Button variant="primary" onClick={() =>this.setState({modalShow:true})}>

                        {modalShow && (<EditProfile user={user} onSubmit={this.handleProfileChange} onHide={() => this.setState({modalShow:false})}/>)}
        
                            Edit Profile
                        </Button>
                    </div>
                </Card>
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