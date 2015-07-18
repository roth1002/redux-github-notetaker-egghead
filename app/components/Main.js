import React, { Component, PropTypes } from 'react';
import SearchGithub from './SearchGithub';


const {
  any
} = PropTypes;


class Main extends Component {

  static propsTypes = {
    children: any.isRequired
  }

  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub />
          </div>
        </nav>
        <div className="container">
          {/* this will render the child routes */}
          {this.props.children}
        </div>
      </div>
    )
  }

};


export default Main;
