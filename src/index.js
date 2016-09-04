import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Layout from './components/Layout'
import Splash from './components/Splash'
import WalkersPage from './components/WalkersPage'
import WalkerView from './components/WalkerView';
import store from './store'

render(
 <Provider store ={store}>
  <Router history = {browserHistory}>
    <Route path ='/' component = {Layout}>
     <IndexRoute component={Splash}/>
     <Route path = '/walkers' component ={WalkersPage}/>
     <Route path = '/walkers/:id' component ={WalkerView}/>
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
