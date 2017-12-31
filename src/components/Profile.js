import React, { Component } from 'react';
import { updateProfile } from '../actions';
import { connect } from 'react-redux';


export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        }, () => console.log('new state', this.state))
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.about) {
            this.props.dispatch(updateProfile(this.state.about))
        }

    }
    render(){
        return(
            <div>
                Edit/Save About
                <div className="editAbout">
                    <textarea onChange={this.onChange} name="about" rows="8" cols="80"></textarea>
                    <button onClick={this.handleSubmit}>Save</button>
                </div>
                Upload Image
                <div className="editAbout">
                    <textarea onChange={this.onChange} name="image" rows="8" cols="80"></textarea>
                    <button onClick={this.handleSubmit}>Save</button>
                </div>
                Edit Projects
                <div className="editAbout">
                    <textarea onChange={this.onChange} name="project" rows="8" cols="80"></textarea>
                    <button onClick={this.handleSubmit}>Save</button>
                </div>
                Change Login Credentials
                <div className="editAbout">
                    <textarea onChange={this.onChange} name="about" rows="8" cols="80"></textarea>
                    <button onClick={this.handleSubmit}>Save</button>
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

export default connect(mapStateToProps)(Profile);
