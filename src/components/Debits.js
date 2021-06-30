import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import moment from "moment";

class Debits extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      description: "",
      amount: 0,
      date: "",
    };
  }

  render() {
    const onSubmit = (e) => {
      e.preventDefault();

      if (!this.state.description || !this.state.amount) {
        alert("Add a description and amount to continue");
        return;
      }

      this.props.onAdd(
        this.state
      );

      console.log(
        this.state.id,
        this.state.description,
        this.state.amount,
        this.state.date
      );

      this.setState({description: ""})
    };

    return (
      <div className="d-container">
        <h1 className="d-title font-link">Debits</h1>

        <div id="debit-c">
          {this.props.debits.map((debit) => (
            <h2 key={debit.id} className="font-link" id="d-c">
              {debit.amount} | {debit.description} |{" "}
              {debit.date.substring(0, 9)}
            </h2>
          ))}
        </div>

        <form onSubmit={onSubmit}>
          <div className="debit-add">
            <input
              id="but"
              type="text"
              placeholder="Add description"
              onChange={(e) => this.setState({ description: e.target.value })}
            ></input>
            <input
              id="but"
              type="number"
              placeholder="Add amount"
              onChange={(e) => this.setState({ amount: parseInt(e.target.value) })}
            ></input>
            <input
              id="but"
              type="submit"
              value="Add debit"
              onClick={() => {
                this.setState({ date: moment().format("YYYY-MM-DD") });
                this.setState({ id: Math.floor(Math.random() * 10000) + 1 });
              }}
            ></input>
          </div>
        </form>

        <Link id="st" className="font-link" to="/">
          Return to Home
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <div>
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

export default Debits;
