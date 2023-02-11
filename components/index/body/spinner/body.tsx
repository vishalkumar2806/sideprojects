import React from "react";

const BodyGen = () => {
  return (
    <div id="start" style={{ transform: "translateY(0px)" }}>
      <div className="start-gift-card card-google pos-1">
        <div className="value">$1000</div>
      </div>
      <div className="start-gift-card card-steam pos-3">
        <div className="value">$1000</div>
      </div>
      <div className="start-gift-card card-playstation pos-3">
        <div className="value">$1000</div>
      </div>
      <div className="start-gift-card card-spotify pos-3">
        <div className="value">$1000</div>
      </div>
      <div className="start-gift-card card-itunes pos-3">
        <div className="value">$1000</div>
      </div>
      <div className="start-gift-card card-paypal pos-2">
        <div className="value">$1000</div>
      </div>
      <div className="start-gift-card card-amazon pos-0">
        <div className="value">$1000</div>
      </div>
    </div>
  );
};

export default BodyGen;
