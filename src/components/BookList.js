import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import BookCard from "./BookCard";

export default class BookList extends Component {
  render() {
      
    return (
      <React.Fragment>
        <section className="categories">
        <Button onClick={()=>this.props.forMode("all")} className="btn btn-primary">
            All
          </Button>
          <Button onClick={()=>this.props.forMode("switch")} className="btn btn-primary">
            Switch
          </Button>
          <Button onClick={()=>this.props.forMode("gift")} className="btn btn-primary">
            Gift
          </Button>
          <Button onClick={()=>this.props.forMode("temporary-switch")} className="btn btn-primary">
            Temporary Switch
          </Button>

          <Button className="btn btn-primary">
            <Link to="/book/random">Random Book</Link>
          </Button>
        </section>

        <section className="searchbar">
          <form className="d-flex" action="/home" method="GET">
            <input
              name="searchedToy"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </section>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {this.props.books.map(book => {
            
            return (
              <BookCard book={book}/>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
