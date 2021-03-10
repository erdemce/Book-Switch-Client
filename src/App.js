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

class App extends Component {
  state = {
    loggedInUser: "",
    isNewUser: true,
    userLibrary:[]
  };

  componentDidMount() {

      axios
        .get(`/api/auth/user`, { withCredentials: true })
        .then((response) => {
          this.setState(
            {
              loggedInUser: response.data,
            },
            () => {
              axios
                .get(
                  `/api/book/user/${this.state.loggedInUser._id}`
                )
                .then((response) => {
                  this.setState(
                    {
                      userLibrary: response.data,
                    }
                  );
                });
            }
          );
        })
        .catch(() => {});
    }

  handlePhoto=(event)=>{
    event.preventDefault()
    let photo = event.target.photo.files[0]
    let uploadForm = new FormData()
    uploadForm.append('imageUrl', photo)
   

    axios.post("/api/cloudinary/upload", uploadForm)
    .then((response)=> {
      console.log(response.data)
    //   axios.post("api/auth/user`, {photo: response.data.photo, 
    //   withCredentials: true,
    })
    // .then((response) => {    
    //   this.setState({
    //     loggedInUser:response.data
    //   },() => {
    //     this.props.history.push(`/profile`);
    //   })
    // })    
    // .catch((err) => {
    //   console.log("Something went wrong", err);
    // });
    // })
    .catch(()=> {

    })
    }

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
      .post(`/api/auth/signup`, user, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState(
          {
            loggedInUser: response.data,
            isNewUser: true,
          },
          () => {
            this.props.history.push("/");
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleLogIn = (event) => {
    event.preventDefault();
    let user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    axios
      .post(`/api/auth/login`, user, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState(
          {
            loggedInUser: response.data,
          },
          () => {
            this.props.history.push("/");
          }
        );
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  handleLogout = () => {
    axios
      .post(
        `/api/auth/logout`,
        {},
        { withCredentials: true }
      )
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

  handleFirstEdit = (event) => {
    // this.setState({ isNewUser: false }, () => {
    //   this.props.history.push("/profile");
    // });
  };

  handleEditBook = (id,event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const description = event.target.description.value;
    const photo = event.target.photo.value;
    const language = event.target.language.value;
    const category = event.target.category.value;
    const switchMode = event.target.switchMode.value;



    const editedBook={title, author,description,language,category,switchMode}
    

    axios
      .post(`/api/book/edit/${id}`, editedBook, {
        withCredentials: true,
      })
      .then((response) => {
        let updatedBook=response.data
        let updatedLibrary=this.state.userLibrary.map(book=>{
          if(book._id===updatedBook._id){
            updatedBook.owner=book.owner;
            return updatedBook
          }else{
            return book
          }
        })
        this.setState({
          userLibrary:updatedLibrary
        },() => {
          this.props.history.push(`/book/${id}`);
        }
        
        )     
    }
            
      )
      .catch((err) => {
        console.log("Something went wrong", err);
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

    const newBook={title, author,description,language,category,photo,switchMode}
    

    axios
      .post(`/api/book/add`, newBook, {
        withCredentials: true,
      })
      .then((response) => {
        let responseBook=response.data
        this.setState({
          userLibrary:[responseBook, ...this.state.userLibrary]
        })  
    })
      .catch((err) => {
        console.log("Something went wrong", err);
      }); 
  };

  handleDelete = (bookId) => {
    
      axios.delete(`/api/book/delete/${bookId}`,{
        withCredentials: true,
      })
        .then(() => {
           
            let filteredBooks = this.state.userLibrary.filter((book) => {
              console.log(bookId,"from map",book._id)
              return book._id !== bookId
            })
            this.setState({
              userLibrary: filteredBooks
            }, () => {
              this.props.history.push('/profile')
            })
        })
        .catch((err) => {
          console.log('Delete failed', err)
        })
   }

   handleProfileChange = (event) => {
    event.preventDefault();
    let username = event.target.username.value
    let name = event.target.name.value
    let lastName = event.target.lastName.value
    let location = event.target.location.value 
    let _id=this.state.loggedInUser._id
    let updatedUser = {username, name, lastName, location,_id}
    // let cloneUser = JSON.parse(JSON.stringify(this.props.user))
    axios.post(`/api/auth/user`, updatedUser, {
      withCredentials: true,
    })
    .then((response) => {    
      this.setState({
        loggedInUser:response.data
      },() => {
        this.props.history.push(`/profile`);
      })
    })    
    .catch((err) => {
      console.log("Something went wrong", err);
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar
          handleLogout={this.handleLogout}
          handleLogIn={this.handleLogIn}
          handleSignUp={this.handleSignUp}
          user={this.state.loggedInUser}
        />
        {this.state.isNewUser && (
          <Welcome handleFirstEdit={this.handleFirstEdit} />
        )}
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => {
              return <BookList {...routeProps} />;
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
            path="/signup"
            render={(routeProps) => {
              return (
                <SignUpForm handleSubmit={this.handleSignUp} {...routeProps} />
              );
            }}
          />
          <Route
            path="/login"
            render={(routeProps) => {
              return (
                <LogInForm handleSubmit={this.handleLogIn} {...routeProps} />
              );
            }}
          />
          <Route
            path="/book/:bookId"
            render={(routeProps) => {
              return (
                <BookDetails 
                user={this.state.loggedInUser}
                handleAddBook={this.handleAddBook}
                handleDelete={this.handleDelete}
                handleEditBook={this.handleEditBook}
                {...routeProps} />
              );
            }}
          />
          <Route
            path="/messages/:contactId"
            render={(routeProps) => {
              return <MessagesDetails {...routeProps} />;
            }}
          />
          <Route
            path="/profile"
            render={(routeProps) => {
              return (
                <Profile
                  userLibrary={this.state.userLibrary}
                  user={this.state.loggedInUser}
                  handleAddBook={this.handleAddBook}
                  handleDelete={this.handleDelete}
                  handleEditBook={this.handleEditBook}
                  handleProfileChange={this.handleProfileChange}
                  handlePhoto={this.handlePhoto}
                  {...routeProps}
                />
              );
            }}
          />
        </Switch>
        <FooterBar />
      </div>
    );
  }
}

export default withRouter(App);
