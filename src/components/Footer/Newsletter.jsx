import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="newsletter"/>
      <h1 className='headtext__cormorant'>subscribe to our newsletter</h1>
      <p className='p__opensans'>and never miss latest updates</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter your email address'/>
      <button className='custom__button'>subscribe</button>
    </div>
  </div>
  )
}

export default Newsletter;
