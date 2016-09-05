// import React, { Component } from 'react'
// import { browserHistory, Link } from 'react-router'
// import { AppBar, Tabs, Tab } from 'material-ui'
//
// export default class Navbar extends Component {
//   constructor() {
//     super();
//     this.goToUrl = this.goToUrl.bind(this);
//   }
//
//   goToUrl(url) {
//     browserHistory.push(url);
//   }
//
//   render() {
//     return (
//       <AppBar className='AppBar' title="Dog Walker Directory" showMenuIconButton={false} className='AppBar'>
//         <Tabs>
//           <Tab label="Home" onClick={this.goToUrl.bind(null, '/')}/>
//           <Tab label="Profile" onClick={this.goToUrl.bind(null, '/profile')}/>
//           <Tab label="Dog Walkers" onClick={this.goToUrl.bind(null, '/walkers')}/>
//           <Tab label="Login" onClick={this.goToUrl.bind(null, '/login')}/>
//           <Tab label="Register" onClick={this.goToUrl.bind(null, '/register')}/>
//           <Tab label="Logout" onClick={this.goToUrl.bind(null, '/logout')}/>
//         </Tabs>
//       </AppBar>
//     )
//   }
// }

//import UserStore from '../stores/UserStore'
//import UserWelcome from './UserWelcome'
//import UserActions from '../actions/UserActions'

import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import { AppBar, Tabs, Tab } from 'material-ui'


import { logout } from '../actions/OwnerActions';

import { connect } from 'react-redux';

class Appbar extends Component {
  constructor(props) {
    super(props);

    this._logout = this._logout.bind(this);
    this.goToUrl = this.goToUrl.bind(this);
  }

  goToUrl(url) {
    browserHistory.push(url);
  }

  _logout() {
    this.props.logout()
  }

  render() {
    let tabs;
    if (!this.props.username) {
      tabs = [<Tab key={Math.random()} label="Home" onClick={this.goToUrl.bind(null, '/')}/>,
      <Tab key={Math.random()} label="Dog Walkers" onClick={this.goToUrl.bind(null, '/walkers')}/>,
      <Tab key={Math.random()} label="Login" onClick={this.goToUrl.bind(null, '/login')}/>,
      <Tab key={Math.random()} label="Register" onClick={this.goToUrl.bind(null, '/register')}/>];
    } else {
      tabs = [<Tab key={Math.random()} label="Home" onClick={this.goToUrl.bind(null, '/')}/>,
      <Tab key={Math.random()} label="Profile" onClick={this.goToUrl.bind(null, '/profile')}/>,
      <Tab key={Math.random()} label="Dog Walkers" onClick={this.goToUrl.bind(null, '/walkers')}/>,
      <Tab key={Math.random()} label="Logout" onClick={this._logout}/>];
    }
    return (
      <AppBar className='AppBar' title="Dog Walker Directory" showMenuIconButton={false} className='AppBar'>
        <Tabs>
          {tabs}
        </Tabs>
      </AppBar>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.owner.username
})

const mapDispatchToProps = (dispatch) => ({
  logout: (state) => dispatch(logout(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(Appbar)


/*
<nav className="navbar navbar-default navbar-static-top">
  <div className="container-fluid">

    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link className="navbar-brand" to='/'>Dog Walkers Directory</Link>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      {/* <UserWelcome profile={profile}/>

      <ul className="nav navbar-nav navbar-right">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/walkers'>Walkers</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><a onClick={this._logout} style={{cursor:'pointer'}}>Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
*/
