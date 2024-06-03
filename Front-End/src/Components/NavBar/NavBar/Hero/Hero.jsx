import React from "react";
import "./Hero.css";
import hand_icon from "../../../../../Assets/hand_icon.png";
import arrowImage from '../../../../../Assets/arrow.png'
import heroImage from  '../../../../../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVAL ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrowImage} alt=""/>
        </div>
      </div>
      <div className="hero-right"></div>
      <img src={heroImage}  alt='' />
    </div>
  );
};

export default Hero;
