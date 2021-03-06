import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {AuthRoute} from '../util/route_util';
import SearchContainer from './search_container';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer/>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path='/' component={SearchContainer} />
  </div>
);

export default App;