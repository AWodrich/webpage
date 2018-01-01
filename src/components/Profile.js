import React, { Component } from 'react';
import { updateAbout, getProfileData, updateCV } from '../actions';
import { connect } from 'react-redux';
import UploadImage from './common/UploadImage';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.onChange = this.onChange.bind(this)
        this.updateInfo = this.updateInfo.bind(this)
        this.updateCv = this.updateCv.bind(this)
        this.showUploader = this.showUploader.bind(this)
    }

    componentWillMount() {
        this.props.dispatch(getProfileData())
    }

    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        }, () => console.log('new state', this.state))
    }

    updateInfo(e){
        e.preventDefault();
        this.props.dispatch(updateAbout(this.state))
    }

    updateCv(e) {
        e.preventDefault();
        this.props.dispatch(updateCV(this.state))
    }

    showUploader() {
        this.setState({showUploader: true})
    }

    render(){
        console.log('this.props. in profile', this.props);
        if (!this.props.state.data) {
            return null;
        }
        if (!this.props.email) {
            return null;
        }

        const { cv, about } = this.props.state.data;
        const { email } = this.props;

        return(
            <div style={{height:'130vh'}}>
                <div className="edit">
                    <h4>Edit About Text</h4>
                    <textarea onChange={this.onChange} name="about" rows="8" cols="80">{about}</textarea>
                    <button onClick={this.updateInfo}>Change About</button>
                </div>
                <div className="edit">
                    <h4>Upload new Image</h4>
                    <button onClick={this.showUploader}>Uploading Image</button>
                    {this.state.showUploader && <UploadImage />}
                </div>
                <div className="edit">
                    <h4>Edit Your CV</h4>
                    <textarea onChange={this.onChange} name="cv" rows="8" cols="80">{cv}</textarea>
                    <button onClick={this.updateCv}>Change CV</button>
                </div>
                <div className="edit">
                    <h4>Change Login Credentials</h4>
                    <input onChange={this.onChange} name="email" type="email" placeholder={email}></input>
                    <input onChange={this.onChange} name="password" type="password"></input>
                    <button onClick={this.handleSubmit}>Change</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Profile);
