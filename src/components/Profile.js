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
        console.log(e.target.name == "education");


        // set redux state not local state

        this.setState({
            [e.target.name]:e.target.value
        }, () => console.log('new state'))
        console.log('this.setstate', this.state);
    }

    updateInfo(e){
        e.preventDefault();
        this.props.dispatch(updateAbout(this.state))
    }

    updateCv(e) {
        e.preventDefault();
        let { work, education, language, extras } = this.props.state.data.cv;

        console.log('updating cv', this.state);
        this.props.dispatch(updateCV(this.state))
    }

    showUploader() {
        this.setState({showUploader: true})
    }

    render(){
        if (!this.props.state.data) {
            return null;
        }
        if (!this.props.email) {
            return null;
        }

        const { about, email } = this.props.state.data;
        let { work, education, language, extras } = this.props.state.data.cv;
        return(
            <div style={{height:'130vh'}}>
                <div className="edit">
                    <h4>Edit About Text</h4>
                    <textarea onChange={this.onChange} name="about" rows="8" cols="80">{about}</textarea>
                    <button className="input" onClick={this.updateInfo}>Change About</button>
                </div>
                <div className="edit">
                    <h4>Upload new Image</h4>
                    <button className="input" onClick={this.showUploader}>Uploading Image</button>
                    {this.state.showUploader && <UploadImage />}
                </div>
                <div className="edit">
                    <h4>Edit Your CV</h4>
                    <p>Work Experience</p>
                    <textarea onChange={this.onChange} name="work" rows="8" cols="80">{work}</textarea>
                    <p>Education</p>
                    <textarea onChange={this.onChange} name="education" rows="8" cols="80">{education}</textarea>
                    <p>Language</p>
                    <textarea onChange={this.onChange} name="language" rows="8" cols="80">{language}</textarea>
                    <p>Extras</p>
                    <textarea onChange={this.onChange} name="extras" rows="8" cols="80">{extras}</textarea>
                    <button className="input" onClick={this.updateCv}>Change CV</button>
                </div>
                <div className="edit">
                    <h4>Change Login Credentials</h4>
                    <input className="input" onChange={this.onChange} name="email" type="email" placeholder={email}></input>
                    <input className="input" onChange={this.onChange} name="password" type="password"></input>
                    <button className="input" onClick={this.handleSubmit}>Change</button>
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
