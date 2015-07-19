import React, { Component, PropTypes } from 'react';


const {
  string,
  func
} = PropTypes;


class AddNote extends Component {

  static propsTypes = {
    username: string.isRequired,
    addNote: func.isRequired
  }

  handleSubmit() {
    const newNote = this.refs.note.getDOMNode().value;
    this.refs.note.getDOMNode().value = '';
    this.props.addNote(newNote);
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="note" placeholder="Add New Note" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}> Submit </button>
        </span>
      </div>
    );
  }

}


export default AddNote;
