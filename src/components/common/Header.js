import React from 'react';
import { Link } from 'react-router';



exports.Header = (props) => {
    return(
        <div className="header">
            <a to="/">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">CV</a>
            <a href="#wrapContactInfo">Contact</a>
        </div>
    )
}
