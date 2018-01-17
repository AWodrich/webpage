import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
        this.closeModal = this.closeModal.bind(this);
    }
