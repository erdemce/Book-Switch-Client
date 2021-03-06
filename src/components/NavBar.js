import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="justify-content-between body-width" bg="light">
                    <Navbar.Brand className="justify-content-center logo"><Link to="/"><h1>Book<span>Switch</span></h1></Link></Navbar.Brand>
                    <Nav className="justify-content-end justify-content-around" activeKey="/">
                        <Nav.Item><Link to="/"><img src='/assets/home.png' alt="home-icon"/><br></br>Home</Link></Nav.Item>
                        { (this.props.user) && (<Nav.Item><Link to="/messages"><img src='/assets/002-speech-bubble.png' alt="messages-icon"/><br></br>Messages</Link></Nav.Item>)}
                        { (this.props.user) && ( <Nav.Item><Link to="/profile"><img src='/assets/005-like.png' alt="profile-icon"/><br></br>Profile</Link></Nav.Item> )}              
                        { (this.props.user) && ( <Nav.Item><Link onClick={this.props.handleLogout}><img src='/assets/016-shortcut-script-app.png' alt="logout-icon"/><br></br>Log Out</Link></Nav.Item>)}
                        { (!this.props.user) && ( <Nav.Item><Link to="/signup">Signup</Link></Nav.Item> )} 
                        { (!this.props.user) && ( <Nav.Item><Link to="/login">Login</Link></Nav.Item> )} 
                        
                    </Nav>
                </Navbar>
            </div> 
        )
    }
}
export default Header