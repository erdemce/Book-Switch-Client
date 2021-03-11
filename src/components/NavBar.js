import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Button} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="hor-ver-2 justify-content-between body-width" bg="light">
                    <Navbar.Brand className="justify-content-center"><Link className="logo" to="/"><h1>Book<span>Switch</span></h1></Link></Navbar.Brand>
                    <Nav className="hor-ver-2 justify-content-end justify-content-around" activeKey="/">
                        
                            <Nav.Item ><Link className="navbar-item" to="/"><img src='/assets/home.png' alt="home-icon"/><br></br>Home</Link></Nav.Item>
                            { (this.props.user) && (<Nav.Item><Link  to="/messages"><img src='/assets/002-speech-bubble.png' alt="messages-icon"/><br></br>Messages</Link></Nav.Item>)}
                            { (this.props.user) && ( <Nav.Item><Link to="/profile"><img src='/assets/005-like.png' alt="profile-icon"/><br></br>Profile</Link></Nav.Item> )}              
                            { (this.props.user) && ( <Nav.Item><Link onClick={this.props.handleLogout}><img src='/assets/016-shortcut-script-app.png' alt="logout-icon"/><br></br>Log Out</Link></Nav.Item>)}
                            { (!this.props.user) && ( <Nav.Item><Link to="/signup"><Button className="btn-primary" variant="primary">Signup</Button></Link></Nav.Item> )} 
                            { (!this.props.user) && ( <Nav.Item><Link to="/login"><Button className="btn-primary" variant="primary">Login</Button></Link></Nav.Item> )} 
                         
                      
                    </Nav>
                </Navbar>
            </div> 
        )
    }
}
export default Header