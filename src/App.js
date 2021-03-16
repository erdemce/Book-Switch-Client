import config from "./config";
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import BookList from "./components/BookList";
import Welcome from "./components/Welcome";
import BookDetails from "./components/BookDetails";
import Profile from "./components/Profile";
import FooterBar from "./components/FooterBar";
import LogInForm from "./components/LogInForm";
import axios from "axios";
import MessageList from "./components/MessageList";
import MessagesDetails from "./components/MessagesDetails";
import ErrorBoundry from "./components/ErrorBoundry";
import EditProfile from "./components/EditProfile";
import BookForm from "./components/BookForm";
import UploadPhotoForm from "./components/UploadPhotoForm";

class App extends Component {
  state = {
    loggedInUser: null,
    nouser: true,
    error: null,
    userLibrary: [],
    addFormShow: false,
    profileFormShow: false,
    showUploadPhotoForm: false,
    editFormShow: false,
    book: {},
  };

  componentDidMount() {
    axios
      .get(`${config.API_URL}/api/auth/user`, { withCredentials: true })
      .then((response) => {
        this.setState(
          {
            nouser: false,
            loggedInUser: response.data,
          },
          () => {
            axios
              .get(
                `${config.API_URL}/api/book/user/${this.state.loggedInUser._id}`
              )
              .then((response) => {
                this.setState({
                  userLibrary: response.data,
                });
              });
          }
        );
      })
      .catch((error) => {
        this.setState({ nouser: true });
      });
  }

  handlePhoto = (event) => {
    event.preventDefault();
    let photo = event.target.photo.files[0];
    let uploadForm = new FormData();
    uploadForm.append("imageUrl", photo);

    axios
      .post(`${config.API_URL}/api/cloudinary/upload`, uploadForm)
      .then((response) => {
        let photo = response.data.photo;
        let updatedUser = {
          _id: this.state.loggedInUser._id,
          username: this.state.loggedInUser.username,
          name: this.state.loggedInUser.name,
          lastName: this.state.loggedInUser.lastName,
          location: this.state.loggedInUser.location._id,
          photo,
        };
        axios
          .post(`${config.API_URL}/api/auth/user`, updatedUser, {
            withCredentials: true,
          })
          .then((response) => {
            this.setState(
              {
                loggedInUser: response.data,
              },
              () => {
                this.props.history.push(`/profile`);
              }
            );
          })
          .catch((error) => {
            this.setState(
              {
                error: error,
              },
              () => this.props.history.push(`/err`)
            );
          });
      })
      .catch((error) => {});
  };

  handleSignUp = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const name = event.target.name.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const location = event.target.location.value;
    let user = { username, name, lastName, email, password, location };

    axios
      .post(`${config.API_URL}/api/auth/signup`, user, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState(
          {
            error: null,
            loggedInUser: response.data,
          },
          () => {
            this.props.history.push("/");
          }
        );
      })
      .catch((err) => {
        this.setState({ error: err.response.data });
      });
  };

  handleLogIn = (event) => {
    event.preventDefault();
    let user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    axios
      .post(`${config.API_URL}/api/auth/login`, user, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("response", response.data);
        this.setState(
          {
            loggedInUser: response.data,
            error: null,
          },
          () => {
            this.props.history.push("/");
          }
        );
      })
      .catch((err) => {
        this.setState({ error: err.response.data });
      });
  };

  handleLogout = () => {
    axios
      .post(`${config.API_URL}/api/auth/logout`, {}, { withCredentials: true })
      .then(() => {
        this.setState(
          {
            loggedInUser: null,
          },
          () => {
            this.props.history.push("/");
          }
        );
      });
  };

  handleEditBook = (id, event) => {
    
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const description = event.target.description.value;
    const photo = event.target.photo.value;
    const language = event.target.language.value;
    const category = event.target.category.value;
    const switchMode = event.target.switchMode.value;

    const editedBook = {
      title,
      author,
      description,
      language,
      category,
      switchMode,
      photo,
    };
    

    axios
      .post(`${config.API_URL}/api/book/edit/${id}`, editedBook, {
        withCredentials: true,
      })
      .then((response) => {
        let updatedBook = response.data;
        let updatedLibrary = this.state.userLibrary.map((book) => {
          if (book._id === updatedBook._id) {
            updatedBook.owner = book.owner;
            return updatedBook;
          } else {
            return book;
          }
        });

        this.setState(
          {
            userLibrary: updatedLibrary,
          },
          () => {
            this.setState(
              { editFormShow: false },
              this.props.history.push(`/book/${id}`)
            );
          }
        );
      })
      .catch((err) => {
        this.setState({ error: err.response.data });
      });
  };

  handleAddBook = (event) => {
    event.preventDefault();
    const photo = event.target.photo.value;
    const title = event.target.title.value;
    const author = event.target.author.value;
    const description = event.target.description.value;
    const language = event.target.language.value;
    const category = event.target.category.value;
    const switchMode = event.target.switchMode.value;

    const newBook = {
      title,
      author,
      description,
      language,
      category,
      photo,
      switchMode,
    };

    axios
      .post(`${config.API_URL}/api/book/add`, newBook, {
        withCredentials: true,
      })
      .then((response) => {
        let responseBook = response.data;

        this.setState(
          {
            userLibrary: [responseBook, ...this.state.userLibrary],
          },
          () => this.setState({ addFormShow: false })
        );
      })
      .catch((err) => {
        this.setState({ error: err.response.data });
      });
  };

  handleDelete = (bookId) => {
    axios
      .delete(`${config.API_URL}/api/book/delete/${bookId}`, {
        withCredentials: true,
      })
      .then(() => {
        let filteredBooks = this.state.userLibrary.filter((book) => {
          return book._id !== bookId;
        });
        this.setState(
          {
            userLibrary: filteredBooks,
          },
          () => {
            this.props.history.push("/profile");
          }
        );
      })
      .catch((err) => {
        console.log("Delete failed", err);
      });
  };

  handleProfileChange = (event) => {
    event.preventDefault();
    let username = event.target.username.value;
    let name = event.target.name.value;
    let lastName = event.target.lastName.value;
    let location = event.target.location.value;
    let _id = this.state.loggedInUser._id;
    let photo = this.state.loggedInUser.photo;
    let updatedUser = { username, name, lastName, location, _id, photo };

    axios
      .post(`${config.API_URL}/api/auth/user`, updatedUser, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState(
          {
            loggedInUser: response.data,
          },
          () => {
            this.setState({ profileFormShow: false }, () =>
              this.props.history.push(`/profile`)
            );
          }
        );
      })
      .catch((err) => {
        this.setState({ error: err.response.data });
      });
  };

  openBookForm = (book) => {
    if(book._id){
      this.setState({ book: book }, this.setState({ editFormShow: true }));
    }else{
      this.setState({ addFormShow: true })
    }
   
  };

  render() {
    const {
      loggedInUser,
      book,
      error,
      userLibrary,
      addFormShow,
      editFormShow,
      profileFormShow,
      showUploadPhotoForm,
    } = this.state;

    return (
      <div className="App">
        <NavBar
          handleLogout={this.handleLogout}
          handleLogIn={this.handleLogIn}
          handleSignUp={this.handleSignUp}
          user={loggedInUser}
        />
        {!loggedInUser && <Welcome handleFirstEdit={this.handleFirstEdit} />}
        {addFormShow && (
          <BookForm
            onHide={() => this.setState({ addFormShow: false })}
            error={error}
            show={addFormShow}
            book={{}}
            handleAddorEditBook={this.handleAddBook}
          />
        )}
        {editFormShow && (
          <BookForm
            onHide={() => this.setState({ editFormShow: false })}
            error={error}
            show={editFormShow}
            book={book}
            handleAddorEditBook={(event)=>{this.handleEditBook(book._id,event)}}
          />
        )}
        {showUploadPhotoForm && (
          <UploadPhotoForm
            show={showUploadPhotoForm}
            onHide={() => this.setState({ showUploadPhotoForm: false })}
            handlePhoto={this.handlePhoto}
          />
        )}
        {profileFormShow && (
          <EditProfile
            onHide={() => this.setState({ profileFormShow: false })}
            error={error}
            show={profileFormShow}
            user={loggedInUser}
            handleProfileChange={this.handleProfileChange}
          />
        )}

        <Switch>
          <Route
            path="/signup"
            render={(routeProps) => {
              return (
                <SignUpForm
                  error={error}
                  handleSubmit={this.handleSignUp}
                  {...routeProps}
                />
              );
            }}
          />
          <Route
            path="/login"
            render={(routeProps) => {
              return (
                <LogInForm
                  error={error}
                  handleSubmit={this.handleLogIn}
                  {...routeProps}
                />
              );
            }}
          />
          <Route
            exact
            path="/"
            render={(routeProps) => {
              return <BookList {...routeProps} />;
            }}
          />

          <Route
            path="/book/:bookId"
            render={(routeProps) => {
              return (
                <BookDetails
                  user={loggedInUser}
                  handleDelete={this.handleDelete}
                  showEditBookForm={this.openBookForm}
                  {...routeProps}
                />
              );
            }}
          />

          <Route
            exact
            path="/messages"
            render={(routeProps) => {
              return <MessageList {...routeProps} />;
            }}
          />

          <Route
            path="/messages/:contactId"
            render={(routeProps) => {
              return <MessagesDetails {...routeProps} />;
            }}
          />

          <Route
            exact
            path="/profile"
            render={(routeProps) => {
              return (
                <Profile
                  userLibrary={userLibrary}
                  user={loggedInUser}
                  handleDelete={this.handleDelete}
                  showProfileForm={() =>
                    this.setState({ profileFormShow: true })
                  }
                  showEditBookForm={this.openBookForm}
                  showPhotoForm={() =>
                    this.setState({ showUploadPhotoForm: true })
                  }
                  showAddBookForm={() => this.setState({ addFormShow: true })}
                  {...routeProps}
                />
              );
            }}
          />
          <Route
            path="/error"
            render={(routeProps) => {
              return <ErrorBoundry error={error} {...routeProps} />;
            }}
          />
          <Route component={ErrorBoundry} />
        </Switch>
        <FooterBar />
      </div>
    );
  }
}
export default withRouter(App);
