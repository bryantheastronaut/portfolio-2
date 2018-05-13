import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutMeIcon from 'react-icons/lib/fa/user-secret';
import DevIcon from 'react-icons/lib/fa/code';
import DesignIcon from 'react-icons/lib/go/paintcan';
import MediumIcon from 'react-icons/lib/fa/medium';
import ExpandIcon from 'react-icons/lib/fa/angle-left';
import CollapseIcon from 'react-icons/lib/fa/angle-right';
import NavLink from './NavLink';
import './styles/Navigation.css';

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

  shrinkSidebar = () => {
    if (window.innerWidth <= 768) {
      this.setState({ expanded: false });
    }
  }

  render() {
    const { expanded } = this.state;
    const textClass = expanded ? 'navTextShow' : 'navTextHide';
    return (
      <div className={`navLinkContainer ${!expanded ? 'shrinkContainer' : ''}`}>
        <NavLink>
          <Link to="/" onClick={this.shrinkSidebar}>
            <AboutMeIcon size={26} />
            <span className={textClass}>About me</span>
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/design" onClick={this.shrinkSidebar}>
            <DesignIcon size={26} />
            <span className={textClass}>Design</span>
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/dev" onClick={this.shrinkSidebar}>
            <DevIcon size={26} />
            <span className={textClass}>Development</span>
          </Link>
        </NavLink>
        <span className="navLink" onClick={this.shrinkSidebar}>
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
