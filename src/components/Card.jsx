import React, { useState, useEffect } from 'react';
import check from '../images/icon-check.svg';

const Card = () => {
  const [range, setRange] = useState(2);
  const [views, setViews] = useState('100K');
  const [price, setPrice] = useState(16.0);
  const [checked, setChecked] = useState(false);
  const pageviews = ['10k', '50k', '100k', '500k', '1m'];
  const prices = [8.0, 12.0, 16.0, 24.0, 36.0];

  useEffect(() => {
    setViews(pageviews[range]);
    setPrice(prices[range]);
  });

  const handleChange = (event) => {
    setRange(event.target.value);
  };

  const handleCheck = () => {
    !checked ? setChecked(true) : setChecked(false);
  };

  return (
    <div className="card">
      <div className="preview">
        <h3 className="preview__pageviews">{views} Pageviews</h3>
        <div className="price-container">
          <span className="preview__pricing--amount">
            ${!checked ? price.toFixed(2) : (price * 0.75).toFixed(2)}
          </span>
          <h3 className="preview__pricing">/ month</h3>
        </div>
        <input
          type="range"
          className="preview__slider"
          min="0"
          max="4"
          step="1"
          value={range}
          onChange={handleChange}
        />
        <div className="switch-container">
          <label className="preview__switch-label-left">Monthly Billing</label>
          <label className="switch">
            <input type="checkbox" checked={checked} onChange={handleCheck} />
            <span className="slide round"></span>
          </label>
          <label className="preview__switch-label-right">Yearly Billing</label>
          <div className="preview__discount">25% discount</div>
        </div>
      </div>

      <div className="cta">
        <ul className="features">
          <img src={check} alt="Check mark" className="features__check" />
          <li className="features__item">Unlimited websites</li>
          <img src={check} alt="Check mark" className="features__check" />
          <li className="features__item">100% data ownership</li>
          <img src={check} alt="Check mark" className="features__check" />
          <li className="features__item">Email reports</li>
        </ul>
        <button className="btn">Start my trial</button>
      </div>
    </div>
  );
};

export default Card;
