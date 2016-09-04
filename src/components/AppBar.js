import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { AppBar, Tabs, Tab } from 'material-ui'

export default class Navbar extends Component {
  constructor() {
    super();
    this.goToUrl = this.goToUrl.bind(this);
  }

  goToUrl(url) {
    browserHistory.push(url);
  }

  render() {
    return (
      <AppBar className='AppBar' title="Dog Walker Directory" showMenuIconButton={false} className='AppBar'>
        <Tabs>
          <Tab label="Home" onClick={this.goToUrl.bind(null, '/')}/>
          <Tab label="Dog Walkers" onClick={this.goToUrl.bind(null, '/walkers')}/>
          <Tab label="Login" onClick={this.goToUrl.bind(null, '/login')}/>
          <Tab label="Register" onClick={this.goToUrl.bind(null, '/register')}/>
        </Tabs>
      </AppBar>
    )
  }
}
