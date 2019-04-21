import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/softwareEngineer.css';

class SoftwareEngineer extends Component {
  render() {
    return (
      <div className="software-engineer-class">
        <div className="description">
         <p id="title">Finding errors in and out.</p>
         <p id="description">Limited Seats</p>
         <img src={require("../images/maps.png")} id="maps" /><p id="address">Ruangreka Coworking Space Bandung</p>
        </div>
        <div className="image">
         <img src={require("../images/software-engineer.png")} />
        </div>

        <div className="date-price">
         <div className="date">
          <p id="date">Sun, May 05, 2019</p>
          <p id="description">Limited Seats Available</p>
         </div>
         <div className="price">
          <p id="price">Rp. 350.000,00</p>
          <p id="description">per person</p>
          <button id="grab-seat"><a href="/registerSeat">Grab a seat !</a></button>
         </div>
        </div>

        <div className="class-description">
          <div className="description-top">
           <p id="title">Description</p>
           <p id="description">Out of nowhere we can still find the errors between front-end and back-end. Here, we will help you to understand the errors and answering all your questions of your own problem.</p>
          </div>
          <div className="preparation">
            <p id="title">What to bring to the class ?</p>
            <ul id="list">
              <li>Laptops.</li>
              <li>Your problems of back-end or front-end.</li>
              <li>Stationary</li>
            </ul>
          </div>
          <div className="tutor">
            <p id="title">Who is the tutor ?</p>
            <div className="tutor-description">
              <img src={require("../images/tutor.png")} id="tutor" />
              <p id="name">Dian Syahfitra</p>
              <p id="job-title">Software Architect at Bukalapak</p>
              <img src={require("../images/linkedin.png")} id="social-media" />
            </div>
          </div>
         </div>
      </div>
    );
  }
}

export default SoftwareEngineer;