import React, { Component } from 'react'
import { Button,Spinner} from 'react-bootstrap'
import axios from "axios"
import { Link } from 'react-router-dom'

export default class BookDetails extends Component {

    state = {
        book: null,
    }

compon
componentDidMount(){


    let bookId = this.props.match.params.bookId
    axios.get(`http://localhost:5005/api/book/get/${bookId}`)
      .then((response) => {
      
        this.setState({ book: response.data})
      })
      .catch((response) => {
    
        console.log('Fetching failed')
      })
      

}
    render() {
        const {book} = this.state
        const {user}=this.props

        
        if(!book||!user){
            return <>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
          </>
          }

          console.log(user._id,book.owner._id)
          const link=`/messages/`+book.owner._id

        return (<div className="div-message">
       
            <div className="messages-div list-group">
                <div className="card mb-3" style={{maxWidth: "800px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="small-image" src={book.photo} alt="book-image"></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">{book.title}</h4>
                                <h5 className="card-title">by {book.author} </h5>                               
                                <p className="card-text">{book.description}</p>
                                <h5 className="card-title">to {book.switchMode}</h5>
                                {(user._id!==book.owner._id)&&(<p>Book owner: {book.owner.username}</p>)}
                                <div>
                                { (user._id===book.owner._id)&&(<img src='/assets/008-edition.png' alt="editbook-icon" ></img>)}
                                {  (user._id===book.owner._id)&&(<img src='/assets/032-delete-4.png' alt="deletebook-icon"></img>)}
                                { (user._id!==book.owner._id)&&(<Link to={link} ><Button >Request Switch</Button></Link>)} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
        </div>
  
                  
              
        )
    }
}
