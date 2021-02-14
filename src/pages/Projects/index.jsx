import React, { Component } from 'react';
import ProjectNav from './ProjectNav';
import ProjectDetail from './ProjectDetail';
import { Route } from 'react-router-dom';

import './index.css';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <ProjectNav />
        <Route path="/projects/detail/:id/:title" component={ProjectDetail} />
      </div>
    );
  }
}
