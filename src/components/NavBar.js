import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'


export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="justify-content-center" bg="light">
                    <Navbar.Brand href="/"><img src='../assets/home.png' alt="home-icon"/>Home</Navbar.Brand>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-2">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Log Out
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
