import React, { Component } from 'react';
import { Spinner} from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from "axios";

export default class MessageList extends Component {
    state={
        messages:null,
        loggedInUser:null
    }
    componentDidMount() {

        if (!this.state.loggedInUser) {
            axios
              .get("http://localhost:5005/api/auth/user", { withCredentials: true })
              .then((response) => {
                this.setState({
                  loggedInUser: response.data,
                });
              })
              .catch(() => {});
          }
        axios
          .get("http://localhost:5005/api/message", { withCredentials: true })
          .then((response) => {
            this.setState({ messages: response.data});
          })
          .catch(() => {
            console.log("Fetching failed");
          });
      }

      

    render() {
      const{messages,loggedInUser}=this.state
      if(!messages||!loggedInUser){
        return <>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
      </>
      }

       
        
        let contacts=[]  
        let messageGroups = []
        messages.filter(msg => (msg.bookRelated)).forEach(ms => {  
            
          let contact = (ms.between[0]._id === loggedInUser._id) ? ms.between[1] : ms.between[0]
          
          if (!contacts.includes(contact._id)) {
            let messageGroup = {
              contact,
              bookRelated:ms.bookRelated,
              date: ms.date.toString().substring(4, 9) + ms.date.toString().substring(14, 21),
              text: ms.text
            }
           
            contacts.push(contact._id)
            messageGroups.push(messageGroup)
            
          }

        });
        return (
          
            <div>
                {messageGroups.length ? (<h1>Your Messages</h1>) : (<h1>You have no Messages yet</h1>) }
                <div className="list-group">

                {
                    messageGroups.map(messagesWithOne=>{
                        let link="/messages/"+messagesWithOne.contact._id
                        return (
                            <Link to={link} key={messagesWithOne.contact._id} class="list-group-item-action">
                                <div className="card mb-3 body-width">
                                    <div className="row g-0 hor-ver-2">
                                        <div className="col-md-4">
                                            <img className="small-image" src={messagesWithOne.bookRelated.photo} alt="bookImage"></img>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Messages with <span>{messagesWithOne.contact.username}</span></h5>
                                                <h5 className="card-title">Book to Switch <span>{messagesWithOne.bookRelated.title}</span></h5>
                                                <h5 className="card-title">Book to Switch <span>{messagesWithOne.bookRelated.author}</span></h5>
                                                <p className="card-text">{messagesWithOne.text}</p>
                                                <p className="text-muted">{messagesWithOne.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
                </div>   
            </div>
        )
    }
}
