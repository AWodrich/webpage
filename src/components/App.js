import React, { Component } from 'react';
import { Home } from './Home';
import { Header } from './common/Header';
import { Footer } from './common/Footer';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="app">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
