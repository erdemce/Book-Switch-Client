import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default class MessagesDetails extends Component {
    state={
        messages:[],
        book:"",
        contact:"",
        loggedInUser:""
    }
    componentDidMount() {
      console.log("merhaba")

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
          let contactId = this.props.match.params.contactId
        axios
          .get(`http://localhost:5005/api/message/${contactId}`, { withCredentials: true })
          .then((response) => {
            let contact=response.data[0].between[0]._id==contactId ? response.data[0].between[0] : response.data[0].between[1]


            this.setState({
              messages: response.data,
              book:response.data[0].bookRelated,
              contact:contact
            },()=>
              console.log(this.state.book,this.state.contact))
          })
          .catch(() => {
            console.log("Fetching failed");
          });
      }

      


    render() {


      const{messages,book,contact}=this.state

     
      
      let link="/book/"+book._id
        return (

                  <div className="div-message">
                    <Link className="book-link" to={link}>
                        <div className="messages-div list-group">
                            <div className="card mb-3" style={{maxWidth: "800px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img className="small-image" src={this.state.book.photo} alt="book-image"></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title">{this.state.book.title}</h4>
                                            <h5 className="card-title">by {this.state.book.author} </h5>
                                            <h5 className="card-title">to {this.state.book.switchMode}</h5>
                                            <p className="card-text">{this.state.book.description}</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                     <h2>Messages with {contact.username}</h2>


                     {
                       messages.map((message)=>{
                         let date=message.date;
                         let className=(message.between[1]._id==contact._id)? "div-right" : "div-left"
                         return (
                           <div className={className}>
                         {message.text}<br></br>
                         <span className="small text-muted">{date}</span>

                         </div>)

                       })
                     }


                     <form className="message-form" method="POST" action="/answermessage/{{data.contactId}}/{{data.toyId}}">
                     <input name="text" required="true" type="text" className="form-control"></input>
                      <button type="submit" className="btn btn-primary btn-del">Send</button>
                   </form> 
                  </div>)}}