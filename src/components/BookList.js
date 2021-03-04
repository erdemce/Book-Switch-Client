import React, { Component } from 'react'
import { CardDeck, Card } from 'react-bootstrap'

export default class BookList extends Component {
    render() {
        return (
            <React.Fragment>
            <h2>All Books in {this.props.city}</h2>
            <div className="col-md-4 col-12 mt-5 mx-auto">
            

                {

                    this.props.books.map((book,index)=>{
                return (<Card key={index} >
                    <Card.Img style={{width:"100px"}}variant="top" src={book.photo} />
                    <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Title>{book.author}</Card.Title>

                    <Card.Text>
                    {book.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{book.owner.city}</small>
                    </Card.Footer>
                </Card>)


                    })
                }
               
               </div>
              
                </React.Fragment>
        )
    }
}
