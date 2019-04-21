import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/about.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="logo">
            <img src={require("../images/logo-about.png")} id="logo-about" />
            <div className="vertical-line"></div>
        </div>
        <div className="description">
            <p>Face-to-face teaching that teaches <mark>micro skills</mark> and the best way to do something aimed at <mark>students and fresh graduates</mark> to be ready to face <mark>Industries 4.0</mark></p>
        </div>
      </div>
    );
  }
}

export default About;