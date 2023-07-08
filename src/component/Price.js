import React, { useState } from 'react';
import './Price.css';

const Price = () => {
  const [toggle, setToggle] = useState(false);

 return (
  <div>
      <button className="firb" onClick={() => setToggle(!toggle)}>{toggle ? "Annually" : "Monthly"}</button>
    {toggle ? 
      <div className="main-container">
    <section className="first-basic" id="sec"> 
      <h4>Basic</h4>
      <h1><span id="span-l">$</span>199.99</h1><hr></hr>
      <p>1 TB Storage</p><hr></hr>
      <p>5 Users allowed</p><hr></hr>
      <p>send up to 5GB</p><hr></hr>
      <button id="f-button">LEARN MORE</button>
    </section>

    <section id="sec" className="two">
      <h4>Professional</h4>
      <h1><span id="span-l">$</span>249.99</h1><hr></hr>
      <p>5 TB Storage</p><hr></hr>
      <p>10 Users allowed</p><hr></hr>
      <p>send up to 15GB</p><hr></hr>
      <button id="f-button">LEARN MORE</button>
    </section>
      
    <section id="sec">
    <h4>Master</h4>
      <h1><span id="span-l">$</span>399.99</h1><hr></hr>
      <p>10 TB Storage</p><hr></hr>
      <p>15 Users allowed</p><hr></hr>
      <p>send up to 25GB</p><hr></hr>
      <button id="f-button">LEARN MORE</button>
    </section>
    </div>
    : 
  <div className="main-container">
  <section className="first-basic" id="sec"> 
      <h4>Basic</h4>
      <h1><span id="span-l">$</span>19.99</h1><hr></hr>
      <p>500 GB Storage</p><hr></hr>
      <p>2 Users allowed</p><hr></hr>
      <p>send up to 3GB</p><hr></hr>
      <button id="f-button">LEARN MORE</button>
    </section>

    <section id="sec" className="two">
      <h4>Professional</h4>
      <h1><span id="span-l">$</span>24.99</h1><hr></hr>
      <p>1 TB Storage</p><hr></hr>
      <p>2 Users allowed</p><hr></hr>
      <p>send up to 10GB</p><hr></hr>
      <button id="f-button">LEARN MORE</button>
    </section>
      
    <section id="sec">
    <h4>Master</h4>
      <h1><span id="span-l">$</span>39.99</h1><hr></hr>
      <p>2 TB Storage</p><hr></hr>
      <p>10 Users allowed</p><hr></hr>
      <p>send up to 20GB</p><hr></hr>
      <button id="f-button">LEARN MORE</button>
    </section>
      </div>
}
  </div>
 )
}

export default Price;