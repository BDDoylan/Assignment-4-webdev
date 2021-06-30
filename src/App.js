import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import "./App.css";
import Debits from "./components/Debits";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: "Doylan Mihov",
        memberSince: "06/21/20",
      },
      debits: [],
      credits: [],
    };
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  componentDidMount() {
    axios.get("https://moj-api.herokuapp.com/debits").then((response) => {
      this.setState({ debits: response.data });
      console.log(response.data);
    });
  }

  render() {
    const balanceUpdate = () => {
      let update = 0;
      for (let i = 0; i < this.state.debits.length; i++) {
        update = update + this.state.debits[i].amount;
      }
      this.setState({ accountBalance: update });
    };

    setInterval(function () {
      balanceUpdate();
    }, 2000);

    const addDebit = (debit) => {
      const newDebit = {
        id: debit.id,
        description: debit.description,
        amount: debit.amount,
        date: debit.date,
      };
      console.log(debit)
      console.log(newDebit);
      this.setState({debits: [...this.state.debits, newDebit]});
    };

    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );

    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );

    const LogInComponent = () => (
      <Login user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );

    const DebitsComponent = () => (
      <Debits
        debits={this.state.debits}
        accountBalance={this.state.accountBalance}
        onAdd={addDebit}
      />
    );

    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/UserProfile" render={UserProfileComponent} />
          <Route exact path="/Login" render={LogInComponent} />
          <Route exact path="/Debits" render={DebitsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
