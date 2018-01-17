import React, { Component } from 'react';


export default function Contact() {
    return (
        <div id="wrapContactInfo">
            <div id="contacts">
                <a href="https://www.linkedin.com/in/anja-wodrich/" target="_blank"><img className="contactImg" src="./linkedIn.jpg" /></a>
                <a href="https://github.com/AWodrich" target="_blank"><img className="contactImg" src="./github.jpg" /></a>
                <a href="https://twitter.com/anjawodrich?lang=en" target="_blank"><img className="contactImg" src="./twitter.jpg" /></a>
                <a href="mailto:anjawodrich@gmail.com" target="_blank"><img className="contactImg" src="./mail.jpg" /></a>
            </div>
            <h2>Contact</h2>
            <div style={{ position:"relative", left:"48.8%", top:"-200px",  width:"30px", height:"10px", borderBottom:"2px solid violet"}}/>
        </div>
    )
}
