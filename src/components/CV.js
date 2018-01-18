import React, { Component } from 'react';
import { getProfileData } from '../actions';
import { connect } from 'react-redux';
import Home from './Home';


class CV extends Component {
    constructor(props) {
        super(props);
        this.state = { modalClosed: true };
        this.closeModal = this.closeModal.bind(this);
        this.showCV = this.showCV.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(getProfileData())
    }

    closeModal() {
        this.setState({ modalClosed: true });
    }

    showCV() {
        this.setState({ modalClosed: false })
    }


    // <div>
    // {this.state.component == 'CV' ? <CV /> : null}
    // {this.state.modalClosed && null}
    // </div>

    render() {
        if (!this.props.state.data) {
            return null;
        }

        console.log('??????? this state in CV compo', this.state);

        const { work, language, education, extras } = this.props.state.data.cv;

        if (this.state.modalClosed) {
            return(
                <div>
                    <button className="btn" onClick={this.showCV}>View CV</button>
                </div>
            )
        }

        return(
            <div onClick={this.closeModal} className="wrapAllCV">
                <img className="profileImg" src='../../profileImage.jpg' />
                <div className="wrapCv">
                    <p className="cvText">
                        <h4 className="headCv">Work Experience</h4>
                        {work}
                    </p>
                    <p className="cvText">
                        <h4 className="headCv">Education</h4>
                        {education}
                    </p>
                    <p className="cvText">
                        <h4 className="headCv">Language Skills</h4>
                        {language}
                    </p>
                    <p className="cvText">
                        <h4 className="headCv">Extras</h4>
                        {extras}
                    </p>
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

export default connect(mapStateToProps)(CV);
