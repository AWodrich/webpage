import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadImage } from '../../actions';


class UploadImage extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.uploadImage = this.uploadImage.bind(this);
        this.onChange = this.onChange.bind(this);
        this.noUpload = this.noUpload.bind(this);
    }

    uploadImage(e) {
        e.preventDefault();
        var formData = new FormData()
        console.log('this.state.file', this.state.file);;
        formData.append('file', this.state.file);
        this.props.dispatch(uploadImage(formData));
    }

    noUpload() {
        location.replace('/')
    }

    onChange(e) {
        const state = {};
        state[e.target.type] = e.target.files[0];
        this.setState(state);
    }

    render() {
        return (
            <div className="wrapUploadImage">
                <h1>Upload image</h1>
                    <input onChange={this.onChange} className="file" type="file" name="file" />
                    <button type="button" onClick={this.uploadImage}>Upload Image</button>
                    <button className="noUpload" onClick={this.noUpload}>X</button>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(UploadImage);
