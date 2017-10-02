import React, { Component } from 'react';
import { firebaseApp }  from '../providers/firebase';
import '../style.css';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error : {
        message: ''
      }
    }
  }

  signIn(){
    const { email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error});
      });

  }

  render() {
    let msg = null;
    if (this.state.error.message !== '') {
      msg = <div className="alert alert-danger msg">{this.state.error.message}</div>
    }

    return (
      <div className="form-inline form">
        <h2>Sign In</h2>
        <div className="form-group">
          <input 
            className="form-control"
            placeholder="e-Mail"
            onChange={e => this.setState({email: e.target.value})}
            />
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            onChange={e => this.setState({password: e.target.value})}
            />
          <button 
            className="btn btn-primary"
            type="button"
            onClick={() => this.signIn()}>
            Login
          </button>
        </div>
        {msg}
        
      </div>
    )
  }
}

export default SignIn;
