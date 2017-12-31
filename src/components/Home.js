import React, { Component } from 'react';



export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return(
            <div className="home">
                <img className="imgHome" src='../../background.jpg' />
                <h2>About</h2>
                <p>about me</p>
            </div>
        )
    }
}
