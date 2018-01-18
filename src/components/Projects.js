import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../actions';
import { Header } from './common/Header';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { showProject: false};
        this.showProject = this.showProject.bind(this);
        this.closeCard = this.closeCard.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(getProjects())
    }

    showProject(str) {
        this.setState({closeCard: false})
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

    closeCard() {
        this.setState({ closeCard: true })
    }

    render() {
        const { projects } = this.props.state;
        const projectList = [];
        const projectDetails = [];

        if (!projects) {
            return(
                <div>...no projects</div>
            )
        }

        projects.map(project => {
            projectList.push(
                <div onClick={() => {this.showProject(project.title)}} className="singleProject">
                <h1>{project.title}</h1>
                {this.state.title === project.title ? <img style={{ width: "100px", height: "auto" }} src={project.image} /> : <img style={{ width: "100px", height: "100px" }}src='./projectImages/defaultImg.jpg' />}
                </div>
            )
            if (!this.state.closeCard) {
                projectDetails.push(
                    <div>
                    {this.state.title === project.title && <div className="projectCard"><h2>{project.title}</h2><h4>{project.description}</h4><img src={project.image} /><a className="linkGoToWebsite" href={project.website} target="_blank">Go to Website</a><button className="closeProjectBtn" onClick={this.closeCard}>close</button></div>}
                    </div>
                )
            }
        })

        return(
                <div>
                    <h2 className="projectsHeadline">Projects</h2>
                    <div style={{ position:"relative", left:"48.8%", top:"-30px",  width:"30px", height:"10px", borderBottom:"2px solid violet"}}/>
                    <ul className="wrapProjectList">{projectList}</ul>
                    <div>{projectDetails}</div>
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
