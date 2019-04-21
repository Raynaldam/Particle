import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/NotFound.css';
import AvailableClass from './availableClass';

class NotFound extends Component {
  render() {
    return (
      <div className="notFound">
        <div className="big-title">
            <p id="big-title">Sorry, we cannot find what you looking for, look for available classes below.</p>
        </div>
        <AvailableClass />
      </div>
    );
  }
}

export default NotFound;