import React, { Component, PropTypes } from 'react';


const {
  object
} = PropTypes;


class SearchGithub extends Component {

  static contextTypes = {
    router: object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    var { router } = this.context;
    var username = this.refs.username.getDOMNode().value;
    this.refs.username.getDOMNode().value = '';

    router.transitionTo(`/profile/${username}`);
  }

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github </button>
          </div>
        </form>
      </div>
    )
  }

};

export default SearchGithub;
