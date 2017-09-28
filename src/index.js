import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'


ReactDOM.render(
    <BrowserRouter path="/"  >
      <div>
        <Route path="/app" component={App}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
      </div>
    </BrowserRouter>,
    document.getElementById('root')
)
