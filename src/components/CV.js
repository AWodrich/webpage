import React, { Component } from 'react';
import { getProfileData } from '../actions';
import { connect } from 'react-redux';


class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.dispatch(getProfileData())
    }

    render() {
        if (!this.props.state.data) {
            return null;
        }
        const { work, language, education, extras } = this.props.state.data.cv;
        return(
            <div className="wrapAllCV">
            <img className="profileImg" src='../../profileImage.jpg' />
                <div className="wrapCv">
                    {work && <p className="cvText"><h4>Work Experience</h4>{work}</p>}
                    {education && <p className="cvText"><h4>Education</h4>{education}</p>}
                    {language && <p className="cvText"><h4>Language Skills</h4>{language}</p>}
                    {extras && <p className="cvText"><h4>Extras</h4>{extras}</p>}
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
