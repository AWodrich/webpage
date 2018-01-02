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

        console.log('this.props.state??', this.props.state);
        if (!this.props.state) {
            return null
        }

        let { about } = this.props.state


        return(
            <div className="home">
                <div className="headline">Welcome to my Webpage! This is Anja and I am a Full Stack Developer from Germany.</div>
                <img className="imgHome" src='../../background.jpg' />
                <h2>About</h2>
                {about && <p style={{ marginLeft:'4em', marginRight:'4em', lineHeight: '1.5'}}>{about}</p>}
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
