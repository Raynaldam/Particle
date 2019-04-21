import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Navbar from "./dashboard/navbar";
import Index from "./dashboard/index";
import Footer from "./dashboard/footer";
import SoftwareEngineer from './dashboard/softwareEngineer';
import About from './dashboard/about';
import SoftwareEngineerClasses from './dashboard/softwareEngineerClasses';
import ProductDesignerClasses from './dashboard/productDesignerClasses';
import BusinessAnalystClasses from './dashboard/businessAnalystClasses';
import SoftwareEngineerRegister from './dashboard/softwareEngineerRegister';
import RegisterSeat from './dashboard/registerSeat';
import RegisterSeatWaiting from './dashboard/registerSeatWaiting';
import SoftwareEngineerRegisterWaiting from './dashboard/softwareEngineerRegisterWaiting';
import AvailableClass from './dashboard/availableClass';
import NotFound from './dashboard/notFound';
import ProductDesigner from './dashboard/productDesigner';
import BusinessAnalyst from './dashboard/businessAnalyst';
import GetClass from './dashboard/getClass';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <User /> */}
         <Router>
           <Navbar />
           <Route exact path="/" component={Index} />
           <Route path="/softwareEngineer" component={SoftwareEngineer} />
           <Route path="/productDesigner" component={ProductDesigner} />
           <Route path="/businessAnalyst" component={BusinessAnalyst} />
           <Route path="/about" component={About} />
           <Route path="/softwareEngineerClasses" component={SoftwareEngineerClasses} />
           <Route path="/productDesignerClasses" component={ProductDesignerClasses} />
           <Route path="/businessAnalystClasses" component={BusinessAnalystClasses} />
           <Route path="/softwareEngineerRegister" component={SoftwareEngineerRegister} />
           <Route path="/softwareEngineerRegister" component={SoftwareEngineerRegisterWaiting} />
           <Route path="/registerSeat" component={RegisterSeat} />
           <Route path="/registerSeatWaiting" component={RegisterSeatWaiting} />
           <Route path="/availableClass" component={AvailableClass} />
           <Route path="/notFound" component={NotFound} />
           <Route path="/getClass" component={GetClass} />
           <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
