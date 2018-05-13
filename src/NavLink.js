import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

class NavLink extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  constructor() {
    super();
    this.state = { scale: 1.0 };
  }

  animateLink = () => {
    this.setState({ scale: 1.15 }, () => {
      setTimeout(() => this.setState({ scale: 1.0 }), 250);
    });
  }

  render() {
    const bounce = { stiffness: 100, damping: 5 };
    const animationStyle = { scale: spring(this.state.scale, bounce) };
    return (
      <Motion style={animationStyle}>
        {({ scale }) => (
          <div
            onClick={this.animateLink}
            className="navLink"
            style={{ transform: `scale(${scale})` }}
          >
            {this.props.children}
          </div>
        )}
      </Motion>

    );
  }
}

export default NavLink;
