import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/getClass.css';
import AvailableClass from './availableClass';

class GetClass extends Component {
  render() {
    return (
      <div className="getClass">
        <AvailableClass />
      </div>
    );
  }
}

export default GetClass;