import React, { Component } from 'react';
import { firebaseApp } from '../providers/firebase';
import '../style.css';


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state= {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp(){
    console.log(this.state);
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
        this.setState({error});
      }
    );
  }

  render(){
    let msg = null;
    if (this.state.error.msg !== '') {
      msg = <div className="alert alert-danger msg">{this.state.error.message}</div>
    }
    return (
      <div className="form-inline  form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="e-Mail"
            onChange={e => this.setState({email: e.target.value})}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={e => this.setState({password: e.target.value})}
            />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signUp()}
            >
            Sign Up
          </button>
        </div>
        {msg}
      </div>
    )
  }
}

export default SignUp;
