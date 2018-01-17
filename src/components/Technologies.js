// import Slider from 'react-slick';
import React, { Component } from 'react';

export default class Technologies extends Component {
  render() {

      return(
          <div>
              <h2 id="technologies" className="techHead">Technologies</h2>
              <div style={{ position:"relative", left:"48.8%", top:"1040px",  width:"30px", height:"10px", borderBottom:"2px solid violet"}}/>
              <div className="container">
                  <div className="css-carousel">
                        <img className="css-img" src="./technologiesImg/angularImg.jpg" />
                        <img className="css-img" src="./technologiesImg/cssImg.jpg" />
                        <img className="css-img" src="./technologiesImg/jsImg.jpg" />
                        <img className="css-img" src="./technologiesImg/sqlImg.jpg" />
                        <img className="css-img" src="./technologiesImg/reactImg.jpg" />
                        <img className="css-img" src="./technologiesImg/htmlImg.jpg" />
                        <img className="css-img" src="./technologiesImg/nodeImg.jpg" />
                        <img className="css-img" src="./technologiesImg/mongodb.jpg" />
                        <img className="css-img" src="./technologiesImg/VueImg.jpg" />
                  </div>
                </div>
            </div>
      )
  }

}
