import React , {Component} from 'react'
import EditProfile from './EditProfile'
import { Link } from 'react-router'
//import UserStore from '../../stores/UserStore'
import ShowProfile from './ShowProfile'

import { connect } from 'react-redux';

import { getProfile } from '../../actions/OwnerActions';

class ViewProfile extends Component {
  constructor(props){
    super(props);
    // this.state={
    //   profile : UserStore.get()
    // }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    this.props.getProfile();
  }

  componentDidMount() {
    //UserStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    //UserStore.stopListening(this._onChange);
  }

  _onChange() {
    // this.setState({
    //   profile: UserStore.get()
    // });
  }

  render(){
    //let { _id ,username} = this.state.profile;
    let { username, name, image, phone, location, pets, _id, walker } = this.props;

    let path = `/editProfile/${_id}`

    return(

      <div>
        <h1>Hello</h1>
        <p>{username}'s profile page</p>
        <ShowProfile profile={this.props}/>
        <Link to={path}>Edit Profile</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.owner.username,
  name: state.owner.name,
  image: state.owner.image,
  phone: state.owner.phone,
  location: state.owner.location,
  pets: state.owner.pets,
  _id: state.owner._id,
  walker: state.owner.walker
})

const mapDispatchToProps = (dispatch) => ({
  getProfile: (state) => dispatch(getProfile(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile)
