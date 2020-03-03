import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBotsReply, PostBotsReply } from '../actions/BotsReplyAction';

class ConnectBotsReply extends PureComponent {
  static propTypes = {
    fetchBotsReply: PropTypes.func.isRequired,
  }


  componentDidMount() {
    this.props.fetch()
  }
}
