import React, { Component } from 'react';
import { loginAdmin } from '../actions';
import { connect } from 'react-redux';

export class Admin extends Component {
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



export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {

    }

    onSubmit() {
        this.props.dispatch(loginAdmin(this.state))
    }

    onChange(e) {
        const state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    render() {
        return(
            <div style={{border: '4px solid white'}}>
                <input className="input" onChange={this.onChange} type="email" nameClass="inputLogin" name="email" placeholder="email@email.com" />
                <input className="input" onChange={this.onChange} type="password" nameClass="inputLogin" name="password" placeholder="Enter Password" />
                <button className="btnLogin" onClick={this.onSubmit} type="button" nameClass="btnLogin">Login Admin</button>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Login);
