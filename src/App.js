import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import BookList from "./components/BookList";
import WelcomePage from "./components/WelcomePage";
import BookDetails from './components/BookDetails'
import Profile from './components/Profile'
import FooterBar from './components/FooterBar'
 

function App() {
  return (
    <div className="App">
      <NavBar/>
      <WelcomePage/>
      <FooterBar/>
      <Switch>
      <Route exact path="/" component={BookList} />
        <Route exact path ="/book" component={BeersList}/>
        <Route path ="/signup" component={SignUpForm}/>
        <Route path="/book/:bookId" render={(routeProps)=> {
          return <BookDetails {...routeProps}/>
        }}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/messages" render={(routeProps)=> {
          return <Messages onAdd={this.handleSubmit} {...routeProps}/>
        }}/>
      </Switch>
      
    </div>
  );
}

export default App;
