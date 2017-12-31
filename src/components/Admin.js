import React, { Component } from 'react';
import Login from './Login';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        console.log('this.props', this.props);
        return(
            <Login />
        )
    }
}
