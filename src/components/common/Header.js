import React from 'react';
import { Link } from 'react-router';



exports.Header = (props) => {
    return(
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/technologies">Technologies</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/curriculum-vitae">CV</Link>
        </div>
    )
}
