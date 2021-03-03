import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class BookDetails extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Book 1</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last switch 3 weeks ago</small>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}
