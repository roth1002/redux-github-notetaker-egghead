import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import * as AppActions from '../actions/AppActions';


@connect(state => ({
  counter: 0
}))
class NoteTakerApp extends Component {
  render(){
    const { dispatch } = this.props;
    return (
      <Main {...bindActionCreators(AppActions, dispatch)}>
      {this.props.children}
      </Main>
    )
  }
};

export default NoteTakerApp;
