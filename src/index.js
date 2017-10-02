import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { firebaseApp } from './providers/firebase';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


firebaseApp.auth().onAuthStateChanged(user => {
  if (user){
    console.log('user has signed in or up', user);   
  } else {
    console.log('user has signed out or still needs to sign in');    
  }
});

ReactDOM.render(
    <BrowserRouter>      
      <div>
        <Route exact path="/" component={App} /> 
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
      
    </BrowserRouter>,
    document.getElementById('root')
)
