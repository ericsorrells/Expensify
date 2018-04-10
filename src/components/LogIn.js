import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LogIn = ({ startLogin }) => (
  <div>
    <button onClick={ startLogin }>Log In!</button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export { LogIn };
export default connect(undefined, mapDispatchToProps)(LogIn);