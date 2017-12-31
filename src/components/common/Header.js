import React from 'react';
import { Link } from 'react-router';



exports.Header = (props) => {
    console.log(props, 'in header props');
    return(
        <div className="header">
            <div style={{ border: '2px solid black'}}>Home</div>
            <div style={{border: '2px solid pink'}}>Technologies</div>
            <div style={{border: '2px solid grey'}}>Projects</div>
            <div style={{border: '2px solid grey'}}>CV</div>
        </div>
    )
}
