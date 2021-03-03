import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from "./components/BookList";
 

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SignUpForm/>
      <Switch>
      <Route exact path="/" component={BookList} />
        {/* <Route exact path ="/beers" component={BeersList}/>
        <Route path="/beers/:beerId" render={(routeProps)=> {
          return <BeerDetails {...routeProps}/>
        }}/>
        <Route path="/random-beer" component={RandomBeer}/>
        <Route path="/new-beer" render={(routeProps)=> {
          return <NewBeer onAdd={this.handleSubmit} {...routeProps}/>
        }}/> */}
      </Switch>
    </div>
  );
}

export default App;
