import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/SoftwareEngineerRegisterWaiting.css';

class SoftwareEngineerRegisterWaiting extends Component {
  render() {
    return (
      <div className="software-engineer-register">
        <div className="banner">
           <div className="title">
                <p id="title">Finding errors in and out</p>
                <p id="red-label">Limited Seat</p>
                <p id="orange-label">Waiting List</p>
           </div>
           <div className="image">
                <img src={require("../images/software-engineer.png")} id="software-engineer-logo"/>
            </div>
        </div>
    </div>
    );
  }
}

export default SoftwareEngineerRegisterWaiting;