import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light">
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}
