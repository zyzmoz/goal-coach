import React, { Component } from 'react';
import { firebaseApp } from '../providers/firebase';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }
  render() {
    return(
      <div>
        <h2>App</h2>
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
          >
          Sign Out
        </button>
      </div>
    )
  }
}

export default App;
