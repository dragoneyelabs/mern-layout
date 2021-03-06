import React, { Component } from "react";
import "./app.css";

export default class App extends Component {
    state = { username: null };

    componentDidMount() {
        fetch("/api/user")
            .then(res => res.json())
            .then(user => this.setState({ username: user.username }));
    }

    render() {
        const { username } = this.state;
        return (
            <div>
                { username ? <h1>{ `Hello ${username}` }</h1> : <h1>Loading...</h1> }
            </div>
        );
    }
}