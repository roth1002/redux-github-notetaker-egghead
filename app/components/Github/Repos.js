import React, { Component, PropTypes } from 'react';


const {
  string,
  array
} = PropTypes;


class Repos extends Component {

  static propsTypes = {
    username: string.isRequired,
    repos: array.isRequired
  }

  render() {
    const repos = this.props.repos.map((repo, index) => {
      return (
        <li className="list-group-item" key={index}>
          {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
          {repo.description && <p> {repo.description}</p>}
        </li>
      );
    });
    return (
      <div>
        <h3> User Repos </h3>
        <ul className="list-group">
          {repos}
        </ul>
      </div>
    );
  }
}


module.exports = Repos;
