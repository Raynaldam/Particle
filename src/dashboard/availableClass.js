import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/AvailableClass.css';

class AvailableClass extends Component {
  render() {
    return (
      <div className="available-class">
        <div className="available-title">
            <p>Available Classes</p>
        </div>
        <div className="all-class">

        <div className="software-engineer">
          <div class="image">
           <img src={require("../images/software-engineer.png")} />
          </div>
          <div className="description">
           <p id="title">Software Engineer</p>
           <p id="description">Finding errors in and out</p>
           <p id="date">05<br/>MAY</p>
           <div className ="limit-seat">
            <p id="seat">Limited seats available</p>
           </div>
           <div className="price">
            <p id="number">Rp. 350.000,00</p>
           </div>
          </div>
          <div className="details">
           <p id="details"><a href="/softwareEngineer">Details</a></p>
          </div>
         </div>

         <div className="product-designer">
          <div class="image">
           <img src={require("../images/product-designer.png")} />
          </div>
          <div className="description">
           <p id="title">Product Designer</p>
           <p id="description">Understand a bit of what others want</p>
           <p id="date">05<br/>MAY</p>
           <div className ="limit-seat">
            <p id="seat">Limited seats available</p>
           </div>
           <div className="price">
            <p id="number">Rp. 350.000,00</p>
           </div>
          </div>
          <div className="details">
           <p id="details"><a href="/productDesigner">Details</a></p>
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
      </div>
    );
  }
}

export default AvailableClass;