import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutMeIcon from 'react-icons/lib/fa/user-secret';
import DevIcon from 'react-icons/lib/fa/code';
import DesignIcon from 'react-icons/lib/go/paintcan';
import MediumIcon from 'react-icons/lib/fa/medium';
import ExpandIcon from 'react-icons/lib/fa/angle-left';
import CollapseIcon from 'react-icons/lib/fa/angle-right';
import './Navigation.css';

class Navigation extends Component {
  constructor() {
    super();
    this.state = { expanded: false };
    this.resizer = null;
  }

  componentDidMount() {
    this.onResize();
    this.resizer = window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    if (this.resizer) {
      window.removeEventListener('resize', this.onResize);
      this.resizer = null;
    }
  }

  onResize = () => {
    if (window.innerWidth >= 768 && !this.state.expanded) {
      this.setState({ expanded: true });
    } else if (window.innerWidth < 768 && this.state.expanded) {
      this.setState({ expanded: false });
    }
  }

  toggleExpansion = () => {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
  }

  render() {
    const { expanded } = this.state;
    const textClass = expanded ? 'navTextShow' : 'navTextHide';
    return (
      <div className={`navLinkContainer ${!expanded ? 'shrinkContainer' : ''}`}>
        <span className="navLink"><Link to="/"><AboutMeIcon size={26} /><span className={textClass}>About me</span></Link></span>
        <span className="navLink"><Link to="/design"><DesignIcon size={26} /><span className={textClass}>Design</span></Link></span>
        <span className="navLink"><Link to="/dev"><DevIcon size={26} /><span className={textClass}>Development</span></Link></span>
        <span className="navLink">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@bryantheastronaut"
          ><MediumIcon size={26} /><span className={textClass}>Writing</span></a>
        </span>
        <span className="expandNav">
          {this.state.expanded
            ? <CollapseIcon onClick={this.toggleExpansion} size={26} />
            : <ExpandIcon onClick={this.toggleExpansion} size={26} />
          }
        </span>
      </div>
    );
  }
}

export default Navigation;
