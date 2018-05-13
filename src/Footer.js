import React from 'react';
import Tooltip from 'rc-tooltip';
import EmailIcon from 'react-icons/lib/ti/mail';
import TwitterIcon from 'react-icons/lib/ti/social-twitter';
import 'rc-tooltip/assets/bootstrap.css';
import './Footer.css';

const email = (
  <a
    className="tooltipLink"
    href="mailto:gilbraith.bryan@gmail.com"
  >gilbraith.bryan@gmail.com</a>
);
const twitter = (
  <a
    className="tooltipLink"
    target="_blank"
    href="https://twitter.com/spacebrayn"
    rel="noopener noreferrer"
  >@spacebrayn</a>
);

const Footer = () => (
  <div className="footerContainer">
    <Tooltip
      placement="top"
      overlay={email}
      trigger={['click']}
    >
      <EmailIcon className="footerIcon" size={36} />
    </Tooltip>
    <Tooltip
      placement="top"
      overlay={twitter}
      trigger={['click']}
    >
      <TwitterIcon className="footerIcon" size={36} />
    </Tooltip>
  </div>
);

export default Footer;
