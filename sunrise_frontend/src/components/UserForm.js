import React, { Component } from "react"
// import Location from "./Location"

// const lat = "36.7201600";
// const lng = "-4.4203400";
// const sunRiseUrl = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`;

const initialState = {
    name: ""
}


export default class UserForm extends Component {

    state = initialState

    changeState = (event) => {
        // let {name} = event.target

        this.setState({
            name: event.target.value
        })
    }
    // showSunrise = () => {
    //     fetch(sunRiseUrl)
    //         .then(response => response.json())
    //         .then(console.log)
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addUser(this.state);

        this.setState(initialState)
    }

    render(){
        return(
            <>
                <h3 className="create-user">Create a new user</h3>
                <form className="user-form" onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Name</label>
                    <input name="name" type="text" placeholder="type your name" value={this.state.name} onChange={(event) => this.changeState(event)}/>
                    <input type="submit" value="Submit"/>
                </form>
            </>
        )
    }
}