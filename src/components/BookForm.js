import React, { useEffect,useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios"

function BookForm(props) {
  const [title, setTitle] = useState(props.book.title);
  const [author, setAuthor] = useState(props.book.author);
  const [description, setDescription] = useState(props.book.description);
  const [language, setLanguage] = useState(props.book.language);
  const [category, setCategory] = useState(props.book.category);
  const [switchMode, setSwitchMode] = useState(props.book.switchMode);
  const [fromGoogleList, setFromGooglelist] = useState([]);

  useEffect(() => {
    
    let search=(title)?title.split(" ").join("+"):""
    search=(author)?search+"+inauthor:"+author.split(" ").join("+"):search

    if(title||author){
      setTimeout(()=>{
        axios
       .get("https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyA_ORxjOZYIfOleXQfby-GsQFgnfugueLc")
        .then((response) => {
          console.log(response.data)
        setFromGooglelist(response.data.items)
        })
     }, 500)
      
      
      
    }
    
  }, [title, author])

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {!props.book && <h2>Add a new book to your Library!</h2>}
          {props.book && <h2>Edit your book from your Library!</h2>}
        </Modal.Title>
        <Modal.Title id="contained-modal-title-vcenter">
          {fromGoogleList
            .filter((book, index) => index < 3)
            .filter(book=>book.volumeInfo.imageLinks)
            .map((book) => {
              return(<div className="google-book-card">
                <img
                style={{width:"5em"}}
                  src={book.volumeInfo.imageLinks.smallThumbnail}
                  alt="book-cover"
                ></img>
                <h3>{book.volumeInfo.title}</h3>
                {/* <h3 className="text-muted">by {book.volumeInfo.authors[0]}</h3> */}
              </div>)
            })}
        </Modal.Title>
      </Modal.Header>
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
              onChange={(e) =>setTitle(e.target.value)}  
              value={title}
              name="title"
              required
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
              onChange={(e) => setSwitchMode(e.target.value)}
              value={switchMode}
              name="switchMode"
              required
              type="text"
              placeholder="Enter Switch Mode"
            />
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
