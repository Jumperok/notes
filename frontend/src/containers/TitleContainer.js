import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';

export default connect(
  state => ({
    tasksAmount: state.tasks.length
  })
)(Title);
