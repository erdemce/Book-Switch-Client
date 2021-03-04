import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="justify-content-between" bg="light">
                    <Navbar.Brand className="justify-content-center"><Link to="/"><h1>Book<span>Switch</span></h1></Link></Navbar.Brand>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item><Link to="/"><img src='/assets/home.png' alt="home-icon"/><br></br>Home</Link></Nav.Item>
                        <Nav.Item><Link to="/book/random">Random Book</Link></Nav.Item>
                        <Nav.Item><Link to="/messages">Messages</Link></Nav.Item>
                        <Nav.Item><Link to="/profile">Profile</Link></Nav.Item>
                        <Nav.Item eventKey="disabled" disabled><Link to="/logout">Log Out</Link></Nav.Item>                        
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
export default Header