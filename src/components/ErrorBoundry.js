import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

export default class ErrorBoundry extends Component {



    render() {
        let message=(this.props.error)?this.props.error.massage:"Uh oh, we can’t seem to find the page you’re looking for. Try going back to the previous page"
        return (
            <Card className="bg-dark text-white body-width">
                <Card.Img src="/assets/404page.jpg" alt="Card image"/>
                <Card.ImgOverlay>
                    <Card.Title><h1>Error Found</h1></Card.Title>
                    <Card.Text >
                  {message}
                    </Card.Text>
                    <Card.Text>Our apologies for the inconvenience.</Card.Text>
                </Card.ImgOverlay>
            </Card>
            
        )
    }
}