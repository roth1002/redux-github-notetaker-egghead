import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import * as UserActions from '../actions/UserActions';


@connect(state => ({
  user: state.user
}))
class NoteTakerApp extends Component {

  render() {
    const { dispatch, user } = this.props;
    const actions = bindActionCreators(UserActions, dispatch);

    return (
      <Main actions={actions} user={user}>
        {this.props.children}
      </Main>
    );
  }

}

export default NoteTakerApp;
