import config from "../config";
import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import BookDetailsCard from "./BookDetailsCard";

export default class BookDetails extends Component {
  state = {
    book: null,
  };
  componentDidMount() {
    let bookId = this.props.match.params.bookId;
    axios
      .get(`${config.API_URL}/api/book/get/${bookId}`)
      .then((response) => {
        this.setState({ book: response.data }, () =>
          console.log(this.state.book)
        );
      })
      .catch((response) => {
        console.log("Fetching failed");
      });

    console.log(this.props.user);
  }

  handleSendRequest = (event) => {
    event.preventDefault();
    const text = event.target.text.value;

    const { book } = this.state;

    const newMessage = {
      text,
      bookRelated: book._id,
      between: [this.props.user._id, book.owner._id],
    };

    axios
      .post(`${config.API_URL}/api/message`, newMessage, {
        withCredentials: true,
      })
      .then((response) => {})
      .catch((response) => {
        console.log("Fetching failed");
      });
  };
  render() {
    const { book } = this.state;
    const { user, handleDelete, showEditBookForm } = this.props;

    if (!book) {
      return (
        <>
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="secondary" />
        </>
      );
    }
    const link = `/messages/` + book.owner._id;

    return (
      <BookDetailsCard
        book={book}
        user={user}
        handleDelete={(event) => {
          handleDelete(book._id, event);
        }}
        showEditBookForm={showEditBookForm}
        handleSendRequest={this.handleSendRequest}
      />
    );
  }
}
