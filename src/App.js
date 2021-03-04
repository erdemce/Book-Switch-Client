import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import BookList from "./components/BookList";
import Welcome from "./components/Welcome";
import BookDetails from './components/BookDetails'
import Profile from './components/Profile'
import FooterBar from './components/FooterBar'
import LogInForm from "./components/LogInForm"
import axios from "axios"

class App extends Component {

  state={
    loggedInUser:null,
    books:[],
    selectedBook:null,
    filteredTerm:null,
    isNewUser:true
  }

  componentDidMount(){
    axios.get("http://localhost:5005/api/book")
      .then((response) => {
        this.setState({ book: response.data})
      })
      .catch(() => {
        console.log('Fetching failed')
      })

    if (!this.state.loggedInUser) {
      axios.get("http://localhost:5005/api/auth/user", {withCredentials: true})
        .then((response) => {
            this.setState({
              loggedInUser: response.data
            })
        })
        .catch(() => {

        })
    }  
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
    axios.post("http://localhost:5005/api/auth/signup", user, {withCredentials: true})
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

  handleLogIn = (event) => {
    event.preventDefault()
    let user = {
      email: event.target.email.value,
      password: event.target.password.value
    } 
  
    axios.post("http://localhost:5005/api/auth/login", user, {withCredentials: true})
      .then((response) => {
          this.setState({
            loggedInUser: response.data
          }, () => {
            this.props.history.push('/home')
          })
      })
      .catch((err) => {
          console.log('Something went wrong', err)
      })
   }
  
   handleLogout = () => {
    
    axios.post("http://localhost:5005/api/auth/logout", {}, {withCredentials: true})
    .then(() => {
        this.setState({
          loggedInUser: null
        }, () => {
          this.props.history.push('/home')
        })
    })
  }


  render() {
    return (
       <div className="App">
      <NavBar handleLogout={this.handleLogout} handleLogIn={this.handleLogIn} handleSignUp={this.handleSignUp} user={this.state.loggedInUser}/>
      { (this.state.isNewUser) && ( <Welcome/>)}
      <Switch>

      <Route path ="/home" render={(routeProps)=> {
          return <BookList books={this.state.books} {...routeProps}/>
        }}/>
        <Route path ="/signup" render={(routeProps)=> {
          return <SignUpForm handleSubmit={this.handleSignUp} {...routeProps}/>
        }}/>
         <Route path ="/login" render={(routeProps)=> {
          return <LogInForm handleSubmit={this.handleLogIn} {...routeProps}/>
        }}/>
        <Route path="/book/:bookId" render={(routeProps)=> {
          return <BookDetails {...routeProps}/>
        }}/>
        <Route path="/profile" component={Profile}/>
      
      </Switch>
      <FooterBar/>
      
    </div>
     
    )
  }
}

export default withRouter(App)




