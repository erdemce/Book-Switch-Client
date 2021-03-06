import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default class BookCard extends Component {
    render() {

        const {book} =this.props


        let link="/book/"+book._id

        return (
            <Link to={link} key={book._id}>
              <Card>
                <Card.Img
                  style={{ width: "120px", margin:"0 auto"}}
                  variant="top"
                  src={book.photo}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Title>{book.author}</Card.Title>

                  <Card.Text>{book.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small classNameName="text-muted">{book.owner.city}</small>
                </Card.Footer>
              </Card>
              </Link>
        )
    }
}

