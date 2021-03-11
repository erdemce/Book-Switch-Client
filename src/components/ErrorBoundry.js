import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

export default class ErrorBoundry extends Component {

    state = {
        error: ""
    }

    render() {
        return (
            <Card className="bg-dark text-white body-width">
                <Card.Img src="/assets/404page.jpg" alt="Card image"/>
                <Card.ImgOverlay>
                    <Card.Title><h1>Error Found</h1></Card.Title>
                    <Card.Text >
                    {this.state.error}
                    </Card.Text>
                    <Card.Text>Our apologies for the inconvenience.</Card.Text>
                </Card.ImgOverlay>
            </Card>
            
        )
    }
}
