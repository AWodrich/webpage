import React, { Component } from 'react';
import { getProfileData } from '../actions';
import { connect } from 'react-redux';
import Home from './Home';


class CV extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(getProfileData())
    }

    closeModal() {
        this.setState({active: true});
    }

    render() {
        if (!this.props.state.data) {
            return null;
        }

        if (this.state.active) {
            return null;
        }

        if (!this.state.active) {
            const { work, language, education, extras } = this.props.state.data.cv;
            return(
                <div onClick={this.closeModal} className="wrapAllCV">
                    <img className="profileImg" src='../../profileImage.jpg' />
                    <div className="wrapCv">
                    {work && <p className="cvText"><h4 className="headCv">Work Experience</h4>{work}</p>}
                    {education && <p className="cvText"><h4 className="headCv">Education</h4>{education}</p>}
                    {language && <p className="cvText"><h4 className="headCv">Language Skills</h4>{language}</p>}
                    {extras && <p className="cvText"><h4 className="headCv">Extras</h4>{extras}</p>}
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps)(CV);
