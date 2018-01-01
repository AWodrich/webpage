import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileData } from '../actions';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
            this.props.dispatch(getProfileData())
    }

    render() {
        if (!this.props.state) {
            return null
        }
        return(
            <div className="home">
                <img className="imgHome" src='../../background.jpg' />
                <h2>About</h2>
                {this.props.state.about && <p>{this.props.state.about}</p>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.data
    }
}

export default connect(mapStateToProps)(Home);
