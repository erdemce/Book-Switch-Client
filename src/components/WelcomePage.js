import { Button } from 'bootstrap'
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class WelcomePage extends Component {
    render() {
        return (
            <Card className="bg-dark text-white">
                <Card.Img src="../assets/welcomepage.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Welcome to Book Switch!</Card.Title>
                    <Card.Text>
                    You are now ready to switch books with other people in your community, creating a local book club which instead of buying the same book many times, will allow a book to be read by many others.  supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
                <Button>Start by Editing your Profile</Button>
                <Button>Go back to Home page.</Button>
            </Card>
        )
    }
}
