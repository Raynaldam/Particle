import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import '../css/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
            <ul>
              <li><a href="/"><img id="logo-particle" src={require("../images/logo-particle.png")} /></a></li>
              <li id="active"><Link to="/">Home</Link></li>
              <Popup trigger={<li id="classes">Classes</li>}>
                <div className="classes-category">
                  <div className="software-engineer">
                    <p><a href="/softwareEngineerClasses">Software Engineer</a></p>
                  </div>
                  <div className="product-designer">
                    <p><a href="/productDesignerClasses">Product Designer</a></p>
                  </div>
                  <div className="business-analyst">
                    <p><a href="/businessAnalystClasses">Business Analyst</a></p>
                  </div>
                </div>
              </Popup>
              <li><Link to="/about">About</Link></li>
              <li id="search"><img id="search-icon" src={require("../images/search-icon.png")} />
              <input type="search" name="search" id="search" placeholder="Search for classes"/>
              </li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;