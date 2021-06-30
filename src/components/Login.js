import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        userName: "",
        password: "",
      },
      redirect: false,
    };
  }

  handleChange = (e) => {
    const updatedUser = { ...this.state.user };
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updatedUser[inputField] = inputValue;

    this.setState({ user: updatedUser });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.mockLogIn(this.state.user);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/userProfile" />;
    }

    return (
      <div id="container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName" className="font-link" id="st">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              onChange={this.handleChange}
              value={this.state.user.userName}
            />
          </div>
          <div>
            <label htmlFor="password" className="font-link" id="st">
              Password
            </label>
            <input type="password" name="password" />
          </div>
          <br></br>
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
