import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Layout extends Component {
  render() {
    return (
     <div className = "container">
     <Link to ="">Home | </Link>
      <Link to ="/walkers">Walkers</Link>

      {this.props.children}
     </div>
    )
  }
}
