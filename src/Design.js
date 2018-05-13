import React from 'react';
import houston from './images/houston.jpg';
import './styles/PageContent.css';

const Design = () => (
  <div className="contentContainer">
    <h2 className="title">Designs</h2>
    <h4 className="subtitle">Sketches and other fun stuff.</h4>
    <div className="contentGrid">
      <div className="singleItem">
        <img className="screenshot" src={houston} />
        <p>
          This was a mockup created in Sketch for an all-in-one business solutions
          platform. Made for fun as a side project with a friend.
        </p>
      </div>
    </div>
  </div>
);

export default Design;
