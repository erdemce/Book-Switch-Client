import React, { Component } from 'react'
import { Spinner} from 'react-bootstrap'
import axios from "axios"
import BookDetailsCard from './BookDetailsCard'

export default class BookDetails extends Component {

    state = {
        book: null,
    }
componentDidMount(){


    let bookId = this.props.match.params.bookId
    axios.get(`/api/book/get/${bookId}`)
      .then((response) => {
      
        this.setState({ book: response.data})
      })
      .catch((response) => {
    
        console.log('Fetching failed')
      })
      

}


handleSendRequest=(event)=>{
    event.preventDefault();
    const text = event.target.text.value;

    const{book}=this.state

     
  const newMessage={text, bookRelated:book._id, between: [this.props.user._id,book.owner._id ]}

    axios.post(`/api/message`, newMessage, {
        withCredentials: true,
      })
      .then((response) => {
       
      })
      .catch((response) => {
    
        console.log('Fetching failed')
      })


}
    render() {
        const {book,handleSendRequest} = this.state
        const {user, handleDelete, handleEditBook}=this.props

        
        if(!book||!user){
            return <>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            
          </>
          }
          const link=`/messages/`+book.owner._id

        return (<BookDetailsCard book={book} user={user} handleDelete={handleDelete} handleEditBook={handleEditBook} handleSendRequest={handleSendRequest} />
       
                  
              
        )
    }
}
