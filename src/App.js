import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Authenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user })}
    <div className="App">
      <header>
        <p>
          Dedatekk presents ZipIt
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome, {user.username}</h1>
      </header>
      <button onClick={signOut}>Sign out</button>
    </div>
    </Authenticator>
  );
}

export default App;
