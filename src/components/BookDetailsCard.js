import React, { Component } from 'react'
import {Card,  Button, CardDeck, Row, Col} from 'react-bootstrap'
import BookForm from './BookForm'


export default class BookDetailsCard extends Component {

    state={
        showTextArea:false,
        showEditBookForm:false,
    }

    onHide=()=>{
 
        this.setState({showEditBookForm:false,showTextArea:false })
    }
    render() {


        const{showEditBookForm, showTextArea}=this.state
        const { book,user, handleDelete, handleEditBook, handleSendRequest } = this.props;

        return (
            <CardDeck>
                    {showEditBookForm&&<BookForm show={showEditBookForm} onHide={this.onHide} book={book} handleAddorEditBook={handleEditBook}/> }
                    <Card className="text-center" >
                        <Row className="book-details">
                        <Col>
                        <Card.Img variant="top" src={book.photo} alt="book-cover"  />
                        </Col>
                        <Col>
                        <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Title className="text-muted">by {book.author}</Card.Title>
                        <Card.Text>{book.description}</Card.Text>
                        <Card.Text>Language: {book.language}</Card.Text>
                        <Card.Text>Category: {book.category}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <div><small className="text-muted">Switch Mode: {book.switchMode}</small></div>
                        <div><small className="text-muted">City: {book.owner.location.city}</small></div>
                        </Card.Footer>
                        {showTextArea&&(
                            <form id="userform" class="center" onSubmit={(event)=> {
                                this.onHide();
                                handleSendRequest(event)}}>
                            <textarea name="text" form="userform" cols="60" rows="4" placeholder="Enter your message here..."></textarea>
                            <button type="submit" class="btn btn-primary btn-del">Send</button>
                        </form>

                        )}
                        
                        <div>
                        { (user._id===book.owner._id)&&(<img onClick={()=>this.setState({showEditBookForm:true})} style={{cursor: "pointer"}} src='/assets/008-edition.png' alt="editbook-icon" ></img>)}
                        { (user._id===book.owner._id)&&(<img onClick={handleDelete} src='/assets/032-delete-4.png' style={{cursor: "pointer"}} alt="deletebook-icon"></img>)}
                        { (user._id!==book.owner._id)&&(<Button onClick={()=>this.setState({showTextArea:true})}>Request Switch</Button>)} 
                        </div>

                        
                        </Col>
                        </Row>
                    </Card>
                </CardDeck>
        )
    }
}
