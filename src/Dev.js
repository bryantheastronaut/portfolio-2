import React from 'react';
import omcImg from './images/one-minute-cookbook.png';
import mernImg from './images/MERN-comment-box.png';
import approved from './images/approved.png';
import './styles/PageContent.css';

const Dev = () => (
  <div className="contentContainer">
    <h2 className="title">Development</h2>
    <h4 className="subtitle">Side Projects or Work related</h4>
    <div className="contentGrid">
      <div className="singleItem">
        <h2>One Minute Cookbook</h2>
        <img src={omcImg} alt="One Minute Cookbook" className="screenshot" />
        <p>
          This started as a weekend hack project to give my partner
          a way to keep track of her favorite cooking videos. This is
          this shipped beta version. Built with React, Express, Node, & MongoDB.
          **Note** This is currently undergoing a significant re-write!
        </p>
        <a href="http://www.oneminutecookbook.co" target="_blank" rel="noreferrer noopener">
          One Minute Cookbook
        </a>
      </div>
      <div className="singleItem">
        <h2>MERN Comment Box Tutorial</h2>
        <img src={mernImg} alt="MERN comment box" className="screenshot" />
        <p>
          This is a re-write of an old tutorial I wrote that gained popularity with
          newer developers trying to learn full stack development. When the old one
          became out of date, I decided to take all the things I've learned since
          and implement a more robust and cleaner solution.
        </p>
        <a
          href="https://medium.com/@bryantheastronaut/ok-here-we-go-b9f683c5a00c"
          target="_blank"
          rel="noopener noreferrer"
        >Medium post</a>{' '}
        <a
          href="https://github.com/bryantheastronaut/mern-comment-box-v2"
          target="_blank"
          rel="noopener noreferrer"
        >Source code</a>
      </div>
      <div className="singleItem">
        <h2 className="title">Approved Client Website</h2>
        <img src={approved} alt="Approved Digital Mortgage Platform" className="screenshot" />
        <p>
          A client facing website for the company I work for. This was built with React using Bootstrap
          for styling.
        </p>
        <a href="http://www.getapproved.io" target="_blank" rel="noopener noreferrer">
          Approved website
        </a>
      </div>
    </div>
  </div>
);

export default Dev;
