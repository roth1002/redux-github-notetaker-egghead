import React, { Component, PropTypes } from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import helpers from '../utils/helpers';
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
    params: object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
    this.handleAddNote = this.handleAddNote.bind(this)
  }

  init() {
    this.ref = base.bindToState(this.props.params.username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    helpers.getGithubInfo(this.props.params.username)
      .then((dataObj) => {
        this.setState({
          bio: dataObj.bio,
          repos: dataObj.repos
        });
      });
  }

  componentWillMount() {
    this.router = this.context.router;
  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillReceiveProps() {
    base.removeBinding(this.ref);
    this.init();
  }

  handleAddNote(newNote) {
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    });
  }

  render() {
    var { username } = this.props.params;

    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
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
