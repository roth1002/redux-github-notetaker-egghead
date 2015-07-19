import React, { Component, PropTypes } from 'react';


const {
  array
} = PropTypes;


class NotesList extends Component {

  static propsTypes = {
    notes: array.isRequired
  }

  render() {
    const notes = this.props.notes.map((note, index) => {
      return (<li className="list-group-item" key={index}> {note} </li>);
    });

    return (
      <ul className="list-group">
        {notes}
      </ul>
    );
  }

}


export default NotesList;
