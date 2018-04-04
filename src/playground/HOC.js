import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>INFO</h1>
    <p>Here Is Some Info</p>
    <p>Props: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  // create HOC below
  return (props) => (
    <div>
      { props.isAdmin && <p>This Is Private Info! Please Don't Share</p>}
      <WrappedComponent {...props}/>  
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? 
        <WrappedComponent {...props} /> 
        : <p>You Are NOT Authenticated!</p>}
    </div>
  )
}


const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);   // call w component

ReactDOM.render(<AuthInfo isAuthenticated={true} info="Props Info" />, document.getElementById('app'))