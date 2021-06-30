import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <img
          src="http://wp.widewallpapers.net/4k/money/2560x1440/money-2560x1440-003.jpg"
          alt="bank"
        />
        <div id="container">
          <h1 className="title font-link">Bank of React</h1>

          <Link id="st" className="font-link" to="/userProfile">
            User Profile
          </Link>
          <Link id="st" className="font-link" to="/login">
            Login
          </Link>
          <Link id="st" className="font-link" to="/debits">
            Debits
          </Link>
          <AccountBalance accountBalance={this.props.accountBalance} />
        </div>
      </div>
    );
  }
}

export default Home;
