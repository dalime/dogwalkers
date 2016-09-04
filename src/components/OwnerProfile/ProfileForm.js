import React , {Component} from 'react'
import { updateProfile } from '../../actions/OwnerActions'

import { connect } from 'react-redux';

class ProfileForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      username: this.props.username,
      name: this.props.name,
      image: this.props.image,
      phone: this.props.phone,
      location: this.props.location,
      pets: this.props.pets
    }

    this._onInputChange = this._onInputChange.bind(this);
    this._update = this._update.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  _onInputChange(e){
    let key = e.target.dataset.statekey;
    let value = e.target.value;

    this.setState({
        [key]: value
    });
  }

  _update(e){
    e.preventDefault();
    let id = e.target.getAttribute('data-id');

    let updateObj = this.state;

    this.props.updateProfile(id, updateObj);

    //UserActions.updateProfile(id,this.state);

    // console.log(id);
    // console.log("obj:",this.state);
  }
  resetForm(e){
    e.preventDefault();
  }

  render(){
    let { username , name , image, phone, location, pets, _id } = this.props;

    return (
      <form onSubmit={this._update} data-id={_id}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" id="username" required className="form-control" onChange={this._onInputChange} data-statekey="username" placeholder="name"/>
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" id="name" required className="form-control" onChange={this._onInputChange} data-statekey="name" placeholder="First Last"/>
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="text" id="image" required className="form-control" onChange={this._onInputChange} data-statekey="image" placeholder="URL"/>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" id="phone" required className="form-control" onChange={this._onInputChange} data-statekey="phone" placeholder="123-456-7890"/>
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" id="location" required className="form-control" onChange={this._onInputChange} data-statekey="location" placeholder="123 Main St, City, ST"/>
        </div>
        <div className="form-group">
          <label>Pets</label>
          <input type="text" id="pets" required className="form-control" onChange={this._onInputChange} data-statekey="pets" placeholder="Feebie"/>
        </div>
        <button type="submit">Update</button>
        <button onClick={this.resetForm}>Reset</button>
      </form>
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
  _id: state.owner._id
})

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (id, obj) => dispatch(updateProfile(id, obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)
