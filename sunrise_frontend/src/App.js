import React, { Component } from 'react';
import UserForm from "./components/UserForm";
import Location from "./components/Location";
import './App.css';

const usersUrl = "http://localhost:3000/users"
const locationUrl = "http://localhost:3000/locations"

export default class App extends Component {

  state = {
    users: [],
    locations: []
  }

  componentDidMount(){
        this.getUsers();
        this.getLocations();
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
        <Location locations={this.state.locations} />
      </div>
    );
  }
}


