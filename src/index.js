import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, BrowserRouter } from 'react-router-dom';
import { firebaseApp } from './providers/firebase';
import createHistory from 'history/createBrowserHistory';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const history = createHistory();

firebaseApp.auth().onAuthStateChanged(user => {
  if (user){
    console.log('user has signed in or up', user);
    localStorage.setItem('UID', user.uid);
    history.push('/');
  } else {
    console.log('user has signed out or still needs to sign in');
    localStorage.removeItem('UID');
    history.push('/signin');
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
    <Router history={history}>
      <div>
        <PrivateRoute exact path="/" component={App}/>        
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>

    </Router>,
    document.getElementById('root')
)
