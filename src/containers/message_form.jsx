import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createMessage } from '../actions/index.js';


class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          type="text"
          value={this.state.value}
          autoComplete="off"
          className="form-control"
          onChange={this.handleChange}
          ref={(input) => { this.messageBox = input; }}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
