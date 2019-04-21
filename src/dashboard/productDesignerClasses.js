import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/ProductDesignerClasses.css';

class ProductDesignerClasses extends Component {
  render() {
    return (
      <div className="product-designer-classes">
        <div className="banner">
           <p id="title">Product <mark>Designer</mark></p>
           <p id="description">We will be the rock for you to step on the next level of <span id="red">Product Designer</span>. Preparing you to be the <span id="red">Product Designer</span> that companies looking for in this Industry 4.0</p>
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
    </div>
    );
  }
}

export default ProductDesignerClasses;