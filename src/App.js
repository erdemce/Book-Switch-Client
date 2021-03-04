import React {Component} from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import BookList from "./components/BookList";
import WelcomePage from "./components/WelcomePage";
import BookDetails from './components/BookDetails'
import Profile from './components/Profile'
import FooterBar from './components/FooterBar'
import { Component } from "react";
import axios from "axios"

export default class App extends Component {

  state={
    loggedInUser:null,
    books:[],
    selectedBook:null,
    filteredTerm:null,
    isNewUser:false
  }

  handleSignUp =(event) => {
    event.preventDefault()
    const username=event.target.username.value
    const name=event.target.name.value
    const lastName=event.target.lastName.value
    const email=event.target.email.value
    const password=event.target.password.value
    const city=event.target.city.value
    let user = {username, name, lastName, email, password, city}
    axios.post("local.host:5005/api/signup", user, {withCredentials: true})
    .then((response)=> {
      this.setState({
        loggedInUser: response.data,
        isNewUser:true

      }, ()=>{
        this.props.history.push("/home")
      })
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  
  render() {
    return (
       <div className="App">
      <NavBar/>
      <WelcomePage/>
      <Switch>
      <Route exact path="/" component={BookList} />
        {/* <Route exact path ="/book" component={BeersList}/> */}
        <Route path ="/signup" render={(routeProps)=> {
          return <SignUpForm handleSubmit={this.handleSignUp} {...routeProps}/>
        }}/>
        <Route path="/book/:bookId" render={(routeProps)=> {
          return <BookDetails {...routeProps}/>
        }}/>
        <Route path="/profile" component={Profile}/>
        {/* <Route path="/messages" render={(routeProps)=> {
          return <Messages onAdd={this.handleSubmit} {...routeProps}/>
        }}/> */}
      </Switch>
      <FooterBar/>
      
    </div>
     
    )
  }
}


export default App;

