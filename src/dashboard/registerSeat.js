import React, { Component } from 'react';
import '../css/registerSeat.css';
import SoftwareEngineerRegister from '../dashboard/softwareEngineerRegister';
import consumeApi from '../api/consumeApi';

var req = new XMLHttpRequest();

class RegisterSeat extends Component {
  render() {
    function create() {
      req.open('POST', 'http://localhost:8080/registrant', true);
      req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      req.onreadystatechange = function() {
          if (req.readyState == 4 && req.status == 200) {
              console.log('Berhasil');
          } else {
              console.log('gagal konek');
          }
      }
      var firstName = document.getElementById('firstName').value;
      var lastName = document.getElementById('lastName').value;
      var email = document.getElementById('email').value;
      var phone_number = document.getElementById('phone_number').value;
      var job_title = document.getElementById('job_title').value;
      var company = document.getElementById('company').value;
      var class_date = document.getElementById('class_date').value;
      var class_location = document.getElementById('class_location').value;
  
      let sendData = JSON.stringify({
          'firstName' : firstName,
          'lastName' : lastName,
          'email' : email,
          'phone_number' : phone_number,
          'job_title' : job_title,
          'company' : company,
          'class_date' : class_date,
          'class_location' : class_location
      })
      req.send(sendData);
    }
    return (
      <div className="register-seat">
      <SoftwareEngineerRegister />
        <div className="form">
          <div className="title">
            <p id="title">Register For Your <mark id="seat">Seat</mark></p>
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
            <button id="register-seat" onClick={create}>Register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterSeat;