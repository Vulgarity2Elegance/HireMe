import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css'
import { LinkedInPopUp } from 'react-linkedin-login-oauth2'
import Homepage from './containers/Homepage/Homepage';

ReactDom.render(
  (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Homepage} />
        <Route exact path='/linkedin' component={LinkedInPopUp} />
      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('root')
)