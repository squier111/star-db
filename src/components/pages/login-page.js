import React from 'react';
import {Redirect} from 'react-router-dom';

const LoginPage  = ({ inLoggedIn, onLogin }) => {


  if (inLoggedIn) {
    return <Redirect to ='/' />;
  }

  return (
    <div className="jumotron">
      <p>Login to see secret page!</p>
      <button
        className="btn btn-primary"
        onClick={onLogin}>
        Login
      </button>
    </div>
  );

}

export default LoginPage;