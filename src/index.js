import React from 'react';
import { render } from 'react-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
=======
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './style.css'
>>>>>>> 97612abcbe9c1d0019b78e82bb7e53acf6c446b8

import Layout from './components/Layout';
import Splash from './components/Splash';
import WalkersPage from './components/WalkersPage';
import WalkerView from './components/WalkerView';
import Register from './components/Register';
import LoginForm from './components/LoginForm';
import LoginSuccess from './components/OwnerProfile/LoginSuccess';
import EditProfile from './components/OwnerProfile/EditProfile';
<<<<<<< HEAD

import store from './store';
=======
import ViewProfile from './components/OwnerProfile/ViewProfile';
import store from './store'
>>>>>>> 97612abcbe9c1d0019b78e82bb7e53acf6c446b8

render(
 <Provider store ={store}>
  <Router history = {browserHistory}>
    <Route path ='/' component = {Layout}>
     <IndexRoute component={Splash}/>
     <Route path = '/walkers' component ={WalkersPage}/>
     <Route path = '/walkers/:id' component ={WalkerView}/>
     <Route path = '/register' component ={Register}/>
     <Route path = '/login' component ={LoginForm}/>
     <Route path = '/loginSuccess' component ={LoginSuccess}/>
     <Route path = '/editProfile/:id' component ={EditProfile}/>
     <Route path = '/profile' component ={ViewProfile}/>
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
