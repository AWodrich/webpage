import { loginAdmin } from '../actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Profile from './Profile';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        this.props.dispatch(loginAdmin(this.state))
    }

    onChange(e) {
        e.preventDefault();
        const state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    render() {
        if (!this.props.state) {
            this.props.state = ''
        }
        if (this.props.state.success) {
            return <Profile email={this.state.email} />
        }

        return(
            <div style={{height: '130vh'}}>
                <div className="wrapLoginField">
                    {this.props.state.error}
                    <input className="input" onChange={this.onChange} type="email" nameClass="inputLogin" name="email" placeholder="email@email.com" />
                    <input className="input" onChange={this.onChange} type="password" nameClass="inputLogin" name="password" placeholder="Enter Password" />
                    <button className="input" onClick={this.onSubmit} type="button" nameClass="btnLogin">Login Admin</button>
                </div>
            </div>
        )
    }
}




const mapStateToProps = state => {
    return {
        state: state.loggedIn
    }
}

export default connect(mapStateToProps)(Login);
