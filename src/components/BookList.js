import React, { Component } from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default class BookList extends Component {
  render() {
      
    return (
      <React.Fragment>
        <section class="categories">
        <button onClick={()=>this.props.forMode("all")} class="btn btn-primary">
            All
          </button>
          <button onClick={()=>this.props.forMode("switch")} class="btn btn-primary">
            Switch
          </button>
          <button onClick={()=>this.props.forMode("gift")} type="button" class="btn btn-primary">
            Gift
          </button>
          <button onClick={()=>this.props.forMode("temporary-switch")}  type="button" class="btn btn-primary">
            Temporary Switch
          </button>

          <button class="btn btn-primary">
            <Link to="/book/random">Random Book</Link>
          </button>
        </section>

        <section class="searchbar">
          <form class="d-flex" action="/home" method="GET">
            <input
              name="searchedToy"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </section>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {this.props.books.map((book, index) => {
            let link="/book/"+book._id
            return (
                <Link to={link} key={index}>
              <Card>
                <Card.Img
                  style={{ width: "100px", margin:"1em auto"}}
                  variant="top"
                  src={book.photo}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Title>{book.author}</Card.Title>

                  <Card.Text>{book.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{book.owner.city}</small>
                </Card.Footer>
              </Card>
              </Link>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
