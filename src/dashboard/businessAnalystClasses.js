import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/BusinessAnalystClasses.css';

class BusinessAnalystClasses extends Component {
  render() {
    return (
      <div className="business-analyst-classes">
        <div className="banner">
           <p id="title">Business <mark>Analyst</mark></p>
           <p id="description">We will be the rock for you to step on the next level of <span id="red">Business Analyst</span>. Preparing you to be the <span id="red">Business Analyst</span> that companies looking for in this Industry 4.0</p>
           <button id="get-class">Go To Class</button>
        </div>
        <div className="classes">
            <div className="title">
                <p id="title">Classes</p>
            </div>
            <div className="classes-description">
                <p id="description">Trained by professional, all of these classes are based on micro skills or problem that you might have. Along with that problem, we also preparing you to be competitive on the Industry 4.0</p>
            </div>
        </div>
        <div className="business-analyst">
          <div class="image">
           <img src={require("../images/business-analyst.png")} id="business"/>
          </div>
          <div className="description">
           <p id="title">Business Analyst</p>
           <p id="description">Mistakes of agile</p>
           <p id="date">05<br/>MAY</p>
           <div className ="limit-seat">
            <p id="seat">Limited seats available</p>
           </div>
           <div className="price">
            <p id="number">Rp. 350.000,00</p>
           </div>
          </div>
          <div className="details">
           <p id="details"><a href="/businessAnalyst">Details</a></p>
          </div>
         </div>
    </div>
    );
  }
}

export default BusinessAnalystClasses;