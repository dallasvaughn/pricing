import React from 'react';
import circles from '../images/pattern-circles.svg';

const Header = () => {
  return (
    <div className="header">
      <h1 className="slogan">Simple, traffic-based pricing</h1>
      <h3 className="text">
        Sign-up for our 30-day trial. No credit card required.
      </h3>
      <img src={circles} alt="Circle pattern" className="pattern" />
    </div>
  );
};

export default Header;
