import React , {Component} from 'react'
import { updateProfile } from '../../actions/OwnerActions'

import { connect } from 'react-redux';

import { TextField, RaisedButton } from 'material-ui';

class ProfileForm extends Component{
  constructor(props) {
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
  _onInputChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;

    this.setState({
        [key]: value
    });
  }

  _update(e) {
    e.preventDefault();
    let id = e.target.getAttribute('data-id');
    let updateObj = this.state;
    this.props.updateProfile(id, updateObj);
  }
  resetForm(e) {
    e.preventDefault();
  }

  render() {
    let { username , name , image, phone, location, pets, _id } = this.props;
<<<<<<< HEAD
=======
    let style = {
      borderColor: '#000'
    }

>>>>>>> 97612abcbe9c1d0019b78e82bb7e53acf6c446b8
    return (
      <form onSubmit={this._update} data-id={_id}>
        <div className="col-xs-12 col-md-6 col-md-offset-3">
          <TextField
          hintText={username} floatingLabelText="Username"
          className="editInput" floatingLabelFixed={true} id='username'
          required onChange={this._onInputChange} data-statekey="username"
          underlineFocusStyle={style}
          />
          <TextField
          hintText={name} floatingLabelText="Name"
          className="editInput" floatingLabelFixed={true} id='name'
          required onChange={this._onInputChange} data-statekey="name"
          underlineFocusStyle={style}
          />
          <TextField
          hintText={image} floatingLabelText="Image"
          className="editInput" floatingLabelFixed={true} id='image'
          required onChange={this._onInputChange} data-statekey="image"
          underlineFocusStyle={style}
          />
          <TextField
          hintText={phone} floatingLabelText="Phone"
          className="editInput" floatingLabelFixed={true} id='phone'
          required onChange={this._onInputChange} data-statekey="phone"
          underlineFocusStyle={style}
          />
          <TextField
          hintText={location} floatingLabelText="Location"
          className="editInput" floatingLabelFixed={true} id='location'
          required onChange={this._onInputChange} data-statekey="location"
          underlineFocusStyle={style}
          />
          <TextField
          hintText={pets} floatingLabelText="Pets"
          className="editInput" floatingLabelFixed={true} id='pets'
          required onChange={this._onInputChange} data-statekey="pets"
          underlineFocusStyle={style}
          />
          <div className="col-xs-12 text-center">
            <RaisedButton
            label="Save"
            labelPosition="before"
            type='submit'
            className='editBtn'/>
            <RaisedButton
            label="Reset"
            labelPosition="before"
            onClick={this.resetForm}
            className='editBtn'/>
          </div>
        </div>
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
