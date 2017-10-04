import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../providers/firebase';
import AddGoal from './AddGoal';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }
  render() {
    return(
      <div>
        <h2>Goals</h2>
        <AddGoal />
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

function mapStateToProps(state){
  console.log('state', state);
  return {};
}

export  default connect(mapStateToProps, null)(App);
