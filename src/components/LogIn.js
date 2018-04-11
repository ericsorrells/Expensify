import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LogIn = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's Time To Get Your Expenses Under Control</p>
      <button onClick={startLogin} className="button">Login With Google</button>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export { LogIn };
export default connect(undefined, mapDispatchToProps)(LogIn);