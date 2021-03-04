import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import BookList from "./components/BookList";
import WelcomePage from "./components/WelcomePage";
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
    isNewUser:false
  }

  componentDidMount(){
    axios.get("http://localhost:5005/api/book")
      .then((response) => {
        this.setState({ book: response.data})
      })
      .catch(() => {
        console.log('Fecthing failed')
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
      <NavBar/>
      <WelcomePage isNewUser={this.state.isNewUser}/>
      <Switch>
      <Route exact path="/" component={BookList} />
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
        {/* <Route path="/messages" render={(routeProps)=> {
          return <Messages onAdd={this.handleSubmit} {...routeProps}/>
        }}/> */}
      </Switch>
      <FooterBar/>
      
    </div>
     
    )
  }
}

export default withRouter(App)




