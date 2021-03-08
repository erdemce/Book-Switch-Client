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
    number:0
  };

  componentDidMount() {
    this.setState({
      number:5
    })

    if (!this.state.loggedInUser) {
      axios
        .get("http://localhost:5005/api/auth/user", { withCredentials: true })
        .then((response) => {
          this.setState({
            loggedInUser: response.data,
          });
        })
        .catch(() => {});
    }
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
      .post("http://localhost:5005/api/auth/signup", user, {
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
      .post("http://localhost:5005/api/auth/login", user, {
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
        "http://localhost:5005/api/auth/logout",
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
              return (
                <BookList
                  {...routeProps}
                />
              );
            }}
          />
          <Route
          exact
            path="/messages"
            render={(routeProps) => {
              return (
                <MessageList
                  {...routeProps}
                />
              );
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
              return <BookDetails user={this.state.loggedInUser} {...routeProps} />;
            }}
          />
          <Route
            path="/messages/:contactId"
            render={(routeProps) => {
              return <MessagesDetails {...routeProps} />;
            }}
          />

          <Route path="/profile" component={Profile} />
        </Switch>
        <FooterBar />
      </div>
    );
  }
}

export default withRouter(App);
