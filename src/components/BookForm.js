import config from "../config";
import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

function BookForm(props) {
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState(props.book.title);
  const [author, setAuthor] = useState(props.book.author);
  const [description, setDescription] = useState(props.book.description);
  const [language, setLanguage] = useState(props.book.language);
  const [category, setCategory] = useState(props.book.category);
  const [switchMode, setSwitchMode] = useState(props.book.switchMode);
  const [fromGoogleList, setFromGooglelist] = useState([]);

  useEffect(() => {
    if (title || author) {
      let query = title ? "/" + title : "";
      query = author ? query + "/" + author : query;
      setTimeout(() => {
        axios
          .get(`${config.API_URL}/api/book/search${query}`, {
            withCredentials: true,
          })
          .then((response) => {
            setFromGooglelist(response.data);
          })
          .catch(() => {});
      }, 500);
    }
  }, [title, author]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <div className="google-book-card">
        {fromGoogleList &&
          fromGoogleList
            .filter((book, index) => index < 3)
            .filter((book) => book.volumeInfo.imageLinks)
            .filter((book) => book.volumeInfo.authors)
            .map((book) => {
              let newTitle =
                book.volumeInfo.title.length > 15
                  ? book.volumeInfo.title.slice(0, 15) + "..."
                  : book.volumeInfo.title;
              return (
                <a
                  onClick={() => {
                    setTitle(book.volumeInfo.title);
                    setAuthor(book.volumeInfo.authors[0]);
                    setDescription(book.volumeInfo.description.slice(0, 400));
                    setCategory(book.volumeInfo.categories[0]);
                    setPhoto(book.volumeInfo.imageLinks.thumbnail);
                    //setShowGoogle(false)
                  }}
                >
                  <div class="col">
                    <div class="card">
                      <img
                        src={book.volumeInfo.imageLinks.smallThumbnail}
                        alt="book-cover"
                      ></img>
                      <div className="card-body">
                        <h5>{newTitle}</h5>
                        <h5 className="text-muted">
                          by {book.volumeInfo.authors[0]}
                        </h5>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
      </div>
      <Modal.Body className="hor-ver-2">
        <Form
          onSubmit={(event) => {
            props.onHide();
            props.handleAddorEditBook(event);
          }}
        >
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              name="title"
              required
              type="text"
              placeholder="Enter title"
            />

            <Form.Control
              value={photo}
              name="photo"
              hidden
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              name="author"
              required
              type="text"
              placeholder="Enter author(s)"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              name="description"
              type="text"
              placeholder="Enter description"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Language</Form.Label>
            <Form.Control
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
              name="language"
              type="text"
              placeholder="Enter language"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              name="category"
              required
              type="text"
              placeholder="Enter category"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Switch Mode</Form.Label>
            <Form.Control
              as="select"
              placeholder="Select your Switch Mode"
              onChange={(e) => setSwitchMode(e.target.value)}
              name="switchMode"
              required
              type="text"
            >
  
              <option value="switch">Switch</option>
              <option value="gift">Gift</option>
              <option value="temporary-switch">Temporary Switch</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" size="lg" block type="submit">
            Save Book to Library
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default BookForm;
