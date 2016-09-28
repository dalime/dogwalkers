import React, { Component } from 'react';
import { Link } from 'react-router';

import { logout } from '../actions/OwnerActions';

import { connect } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);
    this._logout = this._logout.bind(this);
  }

  _logout() {
    this.props.logout()
  }

  render() {
    return (
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
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.owner.username
})

const mapDispatchToProps = (dispatch) => ({
  logout: (state) => dispatch(logout(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
