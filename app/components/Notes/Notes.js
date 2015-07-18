import React, { Component, PropTypes } from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';


const {
  string,
  array,
  func
} = PropTypes;


class Notes extends Component {

  static propsTypes = {
    username: string.isRequired,
    notes: array.isRequired,
    addNote: func.isRequired
  }

  render() {
    return (
      <div>
        <h3> Notes for {this.props.username} </h3>
        <AddNote username={this.props.username} addNote={this.props.addNote} />
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
};


export default Notes;
