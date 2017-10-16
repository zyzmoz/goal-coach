import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import { firebaseApp } from './providers/firebase';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { logUser } from './actions';
import reducer from './reducers';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const history = createHistory();
const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user){
    localStorage.setItem('UID', user.uid);
    const { email } = user;
    store.dispatch(logUser(email));
    history.push('/');
  } else {
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
  <Provider store={store}>
    <Router history={history}>
      <div>
        <PrivateRoute exact path="/" component={App}/>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>

    </Router>
  </Provider>,
  document.getElementById('root')
)
