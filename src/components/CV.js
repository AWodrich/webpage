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
        if (!this.props.state) {
            return null;
        }
        return(
            <div>
                <div className="wrapCv">
                    <h1>Curriculum Vitae</h1>
                    <div className="cvText">{this.props.state.cv}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state in CV mapStateToProps', state);
    return {
        state: state.data
    }
}

export default connect(mapStateToProps)(CV);
