import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/registerSeatWaiting.css';
import SoftwareEngineerRegisterWaiting from './softwareEngineerRegisterWaiting';

class RegisterSeatWaiting extends Component {
  render() {
    return (
      
      <div className="register-seat">
      <SoftwareEngineerRegisterWaiting />
        <div className="form">
          <div className="title">
            <p id="title">Register For Your <mark>Waiting List</mark></p>
          </div>
          <div className="name">
            <table>
              <tr>
                <td id="name">First Name :</td>
                <td id="lastname">Last Name : </td>
              </tr>
              <tr>
                <td><input type="text" name="firstName" id="firstName" /></td>
                <td><input type="text" name="lastName" id="lastName" /></td>
              </tr>
            </table>
          </div>
          <div className="email">
            <table>
              <tr>
                <td>Email :</td>
              </tr>
              <tr>
                <td><input type="email" name="email" id="email" /></td>
              </tr>
            </table>
          </div>
          <div className="phone-number">
            <table>
              <tr>
                <td>Phone Number :</td>
              </tr>
              <tr>
                <td><input type="number" name="phone_number" id="phone_number" /></td>
              </tr>
            </table>
          </div>
          <div className="job-title">
            <table>
              <tr>
                <td>Job Title :</td>
              </tr>
              <tr>
                <td><input type="text" name="job_title" id="job_title" /></td>
              </tr>
            </table>
          </div>
          <div className="company">
            <table>
              <tr>
                <td>Company :</td>
              </tr>
              <tr>
                <td><input type="text" name="company" id="company" /></td>
              </tr>
            </table>
          </div>
          <div className="class-date">
            <table>
              <tr>
                <td>Class Date :</td>
              </tr>
              <tr>
                <td><input type="date" name="class_date" id="class_date" /></td>
              </tr>
            </table>
          </div>
          <div className="class-location">
            <table>
              <tr>
                <td>Class Location :</td>
              </tr>
              <tr>
                <td><textarea id="class_location" name="class_location"></textarea></td>
              </tr>
            </table>
          </div>
          <div className="class-tutor">
            <p id="title">Class Tutor :</p>
            <div className="image">
              <img src={require("../images/tutor.png")} id="tutor"/>
            </div>
            <div className="tutor-description">
              <p id="name">Dian Syahfitra</p>
              <p id="job-title">Software Architect at Bukalapak</p>
            </div>
          </div>
          <div className="payment-method">
            <table>
              <tr>
                <td><p>Payment Method</p></td>
                <td><p> : <mark>Bank Transfer</mark></p></td>
              </tr>
              <tr>
                <td><p>Total Price</p></td>
                <td><p> : <mark>Rp. 350.000,00</mark></p></td>
              </tr>
            </table>
          </div>
          <div className="register">
            <button id="register">Register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterSeatWaiting;