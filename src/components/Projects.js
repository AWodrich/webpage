import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../actions';
import { Header } from './common/Header';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.dispatch(getProjects())
    }

    render() {
        const { projects } = this.props.state;
        if (!projects) {
            return(
                <div>no projects</div>
            )
        }


        console.log('projects array?', projects);
        const projectList = [];
        projects.map(project => {
            projectList.push(
                <div style={{ height: "300px", width: "100%", border: "2px solid black" }}>
                    <h1>{project.title}</h1>
                    <h4>{project.description}</h4>
                    <img src={project.image} style={{ height: "200px" }} />
                </div>
            )
        })

        return(
                <div style={{ position:"relative", top: "400px", height: "400vh" }}>
                    <div style={{ position:"fixed", top:"30px"}}>
                    <Header />
                    </div>
                    <ul style={{ display: "flex", flexDirection: "column" }}>{projectList}</ul>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Projects);
