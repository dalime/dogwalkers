import React , {Component} from 'react';
import EditProfile from './EditProfile';
import { Link } from 'react-router';
import ShowProfile from './ShowProfile';

import { connect } from 'react-redux';

import { getProfile } from '../../actions/OwnerActions';

class ViewProfile extends Component {
  constructor(props){
    super(props);

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    this.props.getProfile();
  }

  render() {
    let { username, name, image, phone, location, pets, _id, walker } = this.props;


    return(

      <div className='row text-center'>
        <div className="col-xs-12 col-md-6 col-md-offset-3">
          <h1>Hello</h1>
        </div>
        <div className="col-xs-12 col-md-6 col-md-offset-3">
          <p>{username}'s profile page</p>
        </div>
        <ShowProfile profile={this.props}/>
        <div className="col-xs-12 col-md-6 col-md-offset-3">
          <Link to={`/editProfile/${_id}`} className='editProf'>Edit Profile</Link>
        </div>
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
