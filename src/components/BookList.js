import config from '../config'
import React, { Component } from "react";
import { Button,Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";
import axios from "axios";

export default class BookList extends Component {
  state = {
    books: [],
    filtered: [],
    mode: "all",
    searchText: ""  };

  componentDidMount() {
   
  
    axios
      .get(`${config.API_URL}/api/book`)
      .then((response) => {
        this.setState({ books: response.data, filtered: response.data });
      })
      .catch(() => {
        console.log("Fetching failed");
      });
  }

  handleSwitchMode = (mode) => {
    this.setState(
      {
        mode: mode,
      },
      this.updateFilter
    );
  };

  handleSearch = (event) => {
    let searchText = event.target.value.toLowerCase();
    this.setState(
      {
        searchText: searchText,
      },
      this.updateFilter
    );
  };

  updateFilter = () => {
    const { searchText, mode, books } = this.state;
    let filteredBooks = books.filter(
      (book) =>
        (book.title.toLowerCase().includes(searchText) ||
          book.author.toLowerCase().includes(searchText)) &&
        (mode === "all" || book.switchMode === mode)
    );
    this.setState({
      filtered: filteredBooks,
    });
  };
  render() {
    const { books, filtered } = this.state;

    if(books.length===0 ){
      return <>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
  
    </>
    }

    return (
      <React.Fragment>
        <section className="categories">
          <Button
            onClick={() => this.handleSwitchMode("all")}
            className="btn btn-primary"
          >
            All
          </Button>
          <Button
            onClick={() => this.handleSwitchMode("switch")}
            className="btn btn-primary"
          >
            Switch
          </Button>
          <Button
            onClick={() => this.handleSwitchMode("gift")}
            className="btn btn-primary"
          >
            Gift
          </Button>
          <Button
            onClick={() => this.handleSwitchMode("temporary-switch")}
            className="btn btn-primary"
          >
            Temporary Switch
          </Button>

          <Button className="btn btn-primary">
            <Link to="/book/random">Random Book</Link>
          </Button>
        </section>

        <SearchBar forSearch={this.handleSearch} />

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filtered.map((book) => {
            return <BookCard book={book} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}
