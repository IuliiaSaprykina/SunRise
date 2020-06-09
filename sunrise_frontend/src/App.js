import React, { Component } from 'react';
import UserForm from "./components/UserForm";
import Location from "./components/Location";
import './App.css';

const usersUrl = "http://localhost:3000/users"
const locationUrl = "http://localhost:3000/locations"
const lat = "36.7201600";
const lng = "-4.4203400";
const sunRiseUrl = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`;

export default class App extends Component {

  state = {
    users: [],
    locations: [],
    stats: []
  }

  componentDidMount(){
        this.getUsers();
        this.getLocations();
        this.getStats();
  }

  getLocations = () => {
    fetch(locationUrl)
    .then(response => response.json())
    .then(locations => this.setState({locations}))
  }

  getUsers = () => {
    fetch(usersUrl)
        .then(response => response.json())
        .then(users => this.setState({users}))
  }

  getStats = () => {
    fetch(sunRiseUrl)
        .then(response => response.json())
        .then(stats => this.setState({stats}))
  }

  addUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })

    let newUser = {
      ...user
    }

    fetch(usersUrl, {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(newUser)
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Rise and Shine</h1>
        <UserForm addUser={this.addUser}/>
        <Location locations={this.state.locations} stats={this.state.stats}/>
      </div>
    );
  }
}


