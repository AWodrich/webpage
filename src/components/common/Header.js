import React from 'react';
import { Link } from 'react-router';



exports.Header = (props) => {
    return(
        <div className="header">
            <Link to="">Home</Link>
            <Link to="">Technologies</Link>
            <Link to="">Projects</Link>
            <Link to="/curriculum-vitae">CV</Link>
        </div>
    )
}
