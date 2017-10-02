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
    localStorage.setItem('UID', user.uid);
  } else {
    console.log('user has signed out or still needs to sign in');
    localStorage.removeItem('UID');
  }
});

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
      localStorage.getItem('UID') ?
      (<Component {...props}/>) :
      (<SignIn/>)
  )}/>
);


ReactDOM.render(
    <BrowserRouter>
      <div>
        <PrivateRoute path="/" component={App}/>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>

    </BrowserRouter>,
    document.getElementById('root')
)
