import React, { Component, PropTypes } from 'react';


const {
  object
} = PropTypes;


class SearchGithub extends Component {

  static contextTypes = {
    router: object.isRequired
  }

  static propsTypes = {
    actions: object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      username: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { router } = this.context;
    const { username } = this.state;

    this.setState({ username: '' });

    router.transitionTo(`/profile/${username}`);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" onChange={this.handleChange} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    );
  }

}


export default SearchGithub;
