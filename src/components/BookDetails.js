import React, { Component } from 'react'
// import Button from 'react-bootstrap/Card'
import axios from "axios"
import { Modal } from 'react-bootstrap'
 



export default class BookDetails extends Component {

    state = {
        book: ""
    }


componentDidMount(){
    let bookId = this.props.match.params.bookId
    axios.get(`http://localhost:5005/api/book/get/${bookId}`)
      .then((response) => {
        this.setState({ book: response.data},()=>{console.log(this.state.book)})
      })
      .catch(() => {
        console.log('Fetching failed')
      })

}
    render() {

        const {book} = this.state

        return (
            <div className="body-width">
                <Modal as="book" size="lg" aria-labelledby="contained-modal-title-vcenter"
        centered>
                    <Modal.Header closeButton>
                        <Modal.Title><h2>{book.title}</h2></Modal.Title>
                        <Modal.Title><h3>{book.author}</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body><img width="400px" src={book.photo} alt="bookphoto"/>
                        <p>{book.description}</p>
                        <p>{book.category}</p>
                        <p>{book.language}</p>
                        <p>Switch mode: {book.switchMode}</p>
                        {(book.owner == !this.props.user) && (<p>Book owner: {book.owner}</p>)}
                    </Modal.Body>
                    <Modal.Footer>
                    {/* { (book.owner == this.props.user) && (<img src='/assets/008-edition.png' alt="editbook-icon" onClick={editBook}/>)}
                    { (book.owner == this.props.user) && (<img src='/assets/032-delete-4.png' alt="deletebook-icon" onClick={deleteBook}/>)}
                    { (book.owner == !this.props.user) && (<Button onClick={sendMessage}><h2>Request Switch</h2></Button>)} */}   
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
