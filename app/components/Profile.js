import React, { Component, PropTypes } from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import Rebase from 're-base';


const {
  object
} = PropTypes;


var base = Rebase.createClass('https://github-note-taker.firebaseio.com/');


class Profile extends Component {

  static contextTypes = {
    router: object.isRequired
  };

  static propTypes = {
    actions: object,
    params: object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      notes: []
    };
    this.handleAddNote = this.handleAddNote.bind(this)
  }

  init() {
    this.ref = base.bindToState(this.props.params.username, {
      context: this,
      asArray: true,
      state: 'notes'
    });
  }

  componentWillMount() {
    this.router = this.context.router;
    var { username } = this.props.params;
    var { search } = this.props.actions;
    search(username);
  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillReceiveProps(nextProps) {
    var { username } = this.props.params;
    var { username: newUsername } = nextProps.params;
    var { search } = this.props.actions;

    if (username !== newUsername) {
      search(newUsername);
    }

    base.removeBinding(this.ref);
    this.init();
  }

  handleAddNote(newNote) {
    base.post(this.props.params.username, {
      data: this.state.notes.concat([ newNote ])
    });
  }

  render() {
    var { username } = this.props.params;
    var { user } = this.props;

    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile bio={user && user.bio || {}} />
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={user && user.repos || []} />
        </div>
        <div className="col-md-4">
          <Notes
            username={username}
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }
};


export default Profile;
