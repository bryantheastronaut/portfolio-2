import React from 'react';
import EmailIcon from 'react-icons/lib/ti/mail';
import TwitterIcon from 'react-icons/lib/ti/social-twitter';
import './Footer.css';

const Footer = () => (
  <div className="footerContainer">
    <a href="mailto:gilbraith.bryan@gmail.com" className="footerIcon"><EmailIcon size={36} /></a>
    <a href="https://twitter.com/spacebrayn" className="footerIcon"><TwitterIcon size={36} /></a>
  </div>
);

export default Footer;
