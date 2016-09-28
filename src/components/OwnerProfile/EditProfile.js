import React , { Component } from 'react'
import ProfileForm from './ProfileForm'

export default class EditProfile extends Component{
  render() {
    return(
      <div>
        <h3>ProfileEdit</h3>
        <ProfileForm user={this.props.location.query.userid}/>
      </div>
    )
  }
}
