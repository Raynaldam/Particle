import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import '../css/index.css';
class Index extends Component {
  render() {
    return (
      <div className="body">
        <div className="banner">
           <p id="title">Enchance your <mark>skill,</mark><br/>through your <mark>errors !</mark></p>
           <p id="description">Make your tiny little <span id="red-color">errors</span> be the boost up to your <span id="red-color">skill.</span></p>
           <p>We provide you a <span id="red-color">solution</span> for that, so you can be more<br/><span id="red-color">competitive.</span></p>
           <button id="get-class"><a href="/getClass">Get Class</a></button>
        </div>
        <div className="description">
           <div className="title">
            <p id="title">How exactly are we do <mark id="red-block">this ?</mark></p>
            <p id="description">Everyone is a <span id="red-color">pro</span> in their <span id="red-color">expertises</span>, but being<br/>a pro doesn't mean you good at <span id="red-color">everything</span>.<br/>What we do is to make you <span>better</span> than ever.</p>
           </div>
           <div className="box">
              <div className="running">
                <img src={require("../images/running.png")} />
                <p id="title">Running No Limit</p>
                <p id="description">Not only to make you run, but also make you pass your own obstacles.</p>
              </div>
              <div className="micro">
               <img src={require("../images/micro.png")} />
               <p id="title">Micro skills for the win !</p>
               <p id="description">Make you learn about the problems you face, with other leaners.</p>
              </div>
              <div className="solution">
               <img src={require("../images/solution.png")} />
               <p id="title">Experts Solution</p>
               <p id="description">We know you already a pro but we give you an expert for enchancing your skills on demands.</p>
              </div>
           </div>
        </div>
        <div className="upcoming-class">
         <div className="title">
          <h1>Upcoming Classes</h1>
         </div>
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

export default Index;