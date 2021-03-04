import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'


export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="justify-content-end" bg="light">
                    <Navbar.Brand href="/"><img src='/assets/home.png' alt="home-icon"/>Home</Navbar.Brand>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                        <Nav.Link href="/home">Books</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-1">Messages</Nav.Link>
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
