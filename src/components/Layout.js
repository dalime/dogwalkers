import React, { Component } from 'react';
import {Link} from 'react-router'

import Navbar from './Navbar';
import AppBar from './AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Layout extends Component {
  render() {
    return (
    <MuiThemeProvider>
     <div>
      <AppBar />
      {/* <Navbar /> */}
      <div className="container">
        {this.props.children}
      </div>
     </div>
     </MuiThemeProvider>
    )
  }
}
