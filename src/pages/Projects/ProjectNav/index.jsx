import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectNav extends Component {
  state = {
    projects: [
      { id: 1, title: 'Bubble' },
      { id: 2, title: 'Lexio' },
      { id: 3, title: 'CRCR' },
      { id: 4, title: 'HXT' },
    ],
  };

  render() {
    const { projects } = this.state;
    return (
      <div>
        <ul>
          {projects.map((eachObj) => {
            return (
              <li key={eachObj.id}>
                <Link to={`/projects/detail/${eachObj.id}/${eachObj.title}`}>
                  {eachObj.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
