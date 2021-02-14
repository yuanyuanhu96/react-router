import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default class Navigator extends Component {
  render() {
    return (
      <div className="navigator">
        <img src="/img/my-logo.svg" alt="my-logo" width="50px" />
        <div></div>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    );
  }
}
