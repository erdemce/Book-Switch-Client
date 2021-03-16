import React, { Component } from 'react'
import {Card,  Button, CardDeck, Row, Col} from 'react-bootstrap'
import { Link } from "react-router-dom";
import BookForm from './BookForm'


export default class BookDetailsCard extends Component {

    state={
        showTextArea:false,
    }

  
    onHide=()=>{
 
        this.setState({showTextArea:false })
    }
    render() {
        


        const{showTextArea}=this.state
        const {showEditBookForm, book,user, handleDelete, handleSendRequest } = this.props;
        let switchMode=book.switchMode[0].toUpperCase()+book.switchMode.slice(1)

        return (
            <CardDeck className="body-width">
                    
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
                        <Card.Text >Switch Mode: {switchMode}</Card.Text>
                        <Card.Text >City: {book.owner.location.city}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        
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
                        {console.log("user:",user,"book:",book)}
                        { user&&(user._id===book.owner._id)&&(<img onClick={()=>showEditBookForm(book)} style={{cursor: "pointer"}} src='/assets/008-edition.png' alt="editbook-icon" ></img>)}
                        { user&&(user._id===book.owner._id)&&(<img onClick={handleDelete} src='/assets/032-delete-4.png' style={{cursor: "pointer"}} alt="deletebook-icon"></img>)}
                        { user&&(user._id!==book.owner._id)&&(<Button onClick={()=>this.setState({showTextArea:true})}>Request Switch</Button>)} 
                        { !user&&(<Button><Link to="/signup">Please Sign up to send a Request</Link></Button>)} 
                        </div>

                        
                        </Col>
                        </Row>
                    </Card>
                </CardDeck>
        )
    }
}
