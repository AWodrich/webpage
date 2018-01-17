import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileData } from '../actions';
import CV from './CV';
import Projects from './Projects';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
import Contact from './Contact';
import Technologies from './Technologies';

class MyModal extends Component{
   render(){
      const { openCV,onRequestClose } = this.props;
      return (
         <Modal
            onRequestClose={onRequestClose}
            effect={Effect.Newspaper}>
            {openCV && <CV />}
            <button onClick={ModalManager.close}>Close Modal</button>
         </Modal>
      );
   }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {component: null, modalClosed: true};
    }

    componentWillMount() {
            this.props.dispatch(getProfileData())
    }

    showCV(str) {
        if (!this.state.modalClosed) {
            this.setState({ modalClosed: true })
        }
        this.setState({component: str, modalClosed: false})

    }


    render() {
        console.log('this.state/////', this.state);
        if (!this.props.state) {
            return null
        }

        let { about } = this.props.state


        return(
            <div className="wrapMain">
                <div className="home">
                    <div className="headline">Welcome to my Webpage! This is Anja and I am a Full Stack Developer from Germany.</div>
                    <img className="imgHome" src='../../background2.jpg' />
                    <h2 id="about" style={{ color: "#5d807c", fontFamily:"Courier" }}>About</h2>
                    <div style={{ width:"30px", height:"10px", borderBottom:"2px solid violet"}}/>
                    {about && <p style={{ color: "#5d807c", marginLeft:'4em', marginRight:'4em', lineHeight: '1.5'}}>{about}</p>}
                    <button className="btn" onClick={() => {this.showCV('CV')}}>View CV</button>
                </div>
                <div>
                    <div>
                    {this.state.component == 'CV' ? <CV /> : null}
                    {this.state.modalClosed && null}
                    </div>
                    <div>
                        <Contact />
                    </div>
                    <div id="projects">
                        <Projects />
                    </div>
                    <div id="tech">
                        <Technologies />
                    </div>
                </div>
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
