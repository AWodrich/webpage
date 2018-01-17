import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../actions';
import { Header } from './common/Header';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { showProject: false };
        this.showProject = this.showProject.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(getProjects())
    }

    showProject(str) {
        switch(str) {
           case 'Imageboard':
               return this.setState({title: str});
               break;
           case 'Social Network':
               return this.setState({title: str});
               break;
           case 'Mobile App':
               return this.setState({title: str});
               break;
           case 'Weather App':
               return this.setState({title: str});
               break;
           case 'Online Petition':
               return this.setState({title: str});
               break;
           case 'Music App':
               return this.setState({title: str});
               break;
          }
    }

    render() {
        const { projects } = this.props.state;
        if (!projects) {
            return(
                <div>no projects</div>
            )
        }

        const projectList = [];
        projects.map(project => {
            projectList.push(
                <div onClick={() => {this.showProject(project.title)}} className="singleProject">
                    <h1>{project.title}</h1>
                    <img style={{ width: "100px", height: "100px" }}src='./projectImages/defaultImg.jpg' />
                    {this.state.title === project.title && <h4>{project.description}</h4>}
                </div>
            )
        })

        return(
                <div>
                    <h2 className="projectsHeadline">Projects</h2>
                    <div style={{ position:"relative", left:"48.8%", top:"-20px",  width:"30px", height:"10px", borderBottom:"2px solid violet"}}/>
                    <ul className="wrapProjectList">{projectList}</ul>
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
