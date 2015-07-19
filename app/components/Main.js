import React, { Component, PropTypes } from 'react';
import SearchGithub from './SearchGithub';


const {
  object,
  any
} = PropTypes;


class Main extends Component {

  static propsTypes = {
    user: object,
    actions: object.isRequired,
    children: any.isRequired
  }

  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub {...this.props} />
          </div>
        </nav>
        <div className="container">
          {/* this will render the child routes */}
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  }

};


export default Main;
