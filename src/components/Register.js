import React, { Component } from 'react';
import { register } from '../actions/OwnerActions';
import { TextField, RaisedButton } from 'material-ui'

export default class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password1: '',
      password2: '',
      name: '',
      pets: '',
      image: '',
      phone: '',
      location: ''
    }
    this._onInputChange = this._onInputChange.bind(this);
    this._submit = this._submit.bind(this);
  }

  _onInputChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;

    this.setState({
      [key]: value
    });
  }

  _submit(e) {
    e.preventDefault();
    let { username, password1, password2, name, pets, image, phone, location } = this.state;

    if(password1 !== password2) {
      this.setState({
        password1: '',
        password2: ''
      })
      return alert('Passwords do not match, try again.');
    }

    let owner = {
      username,
      password: password1,
      name,
      pets: [pets],
      image,
      phone,
      location
    };

    register(owner);
  }

  render() {
    let { username, password1, password2, name, pets, image, phone, location } = this.state;
    let style = {
      borderColor: '#000'
    }
    return (
      <div className='col-xs-12 col-md-6 col-md-offset-3'>
        <form onSubmit={this._submit}>
          <TextField
          hintText='Username' floatingLabelText="Username"
          className="editInput" floatingLabelFixed={true} id='username'
          required onChange={this._onInputChange} data-statekey="username"
          underlineFocusStyle={style} value={username}
          />
          <TextField
          hintText='Password' floatingLabelText="Password" type='password'
          className="editInput" floatingLabelFixed={true} id='password1'
          required onChange={this._onInputChange} data-statekey="password1"
          underlineFocusStyle={style} value={password1}
          />
          <TextField
          hintText='Password' floatingLabelText="Password (again)" type='password'
          className="editInput" floatingLabelFixed={true} id='password2'
          required onChange={this._onInputChange} data-statekey="password2"
          underlineFocusStyle={style} value={password2}
          />
          <TextField
          hintText='Name' floatingLabelText="Name"
          className="editInput" floatingLabelFixed={true} id='name'
          required onChange={this._onInputChange} data-statekey="name"
          underlineFocusStyle={style} value={name}
          />
          <TextField
          hintText='Pets' floatingLabelText="Pets"
          className="editInput" floatingLabelFixed={true} id='pets'
          required onChange={this._onInputChange} data-statekey="pets"
          underlineFocusStyle={style} value={pets}
          />
          <TextField
          hintText='Phone' floatingLabelText="Phone"
          className="editInput" floatingLabelFixed={true} id='phone'
          required onChange={this._onInputChange} data-statekey="phone"
          underlineFocusStyle={style} value={phone}
          />
          <TextField
          hintText='Location' floatingLabelText="Location"
          className="editInput" floatingLabelFixed={true} id='location'
          required onChange={this._onInputChange} data-statekey="location"
          underlineFocusStyle={style} value={location}
          />
          <TextField
          hintText='Image' floatingLabelText="Image"
          className="editInput" floatingLabelFixed={true} id='image'
          required onChange={this._onInputChange} data-statekey="image"
          underlineFocusStyle={style} value={image}
          />
          <div className='text-center'>
            {image ? <img src={image} className='profPic'/> : ""}
          </div>
          {/* <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" required value={username} data-statekey='username' onChange={this._onInputChange}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" required value={password1} data-statekey='password1' onChange={this._onInputChange}/>
          </div>
          <div className="form-group">
            <label>Password (again)</label>
            <input type="password" className="form-control" placeholder="Password" required value={password2} data-statekey='password2' onChange={this._onInputChange}/>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Name" required value={name} data-statekey='name' onChange={this._onInputChange}/>
          </div>
          <div className="form-group">
            <label>Pets</label>
            <input type="text" className="form-control" placeholder="Pets" required value={pets} data-statekey='pets' onChange={this._onInputChange}/>
          </div>
          <div className="form-group">
            <label>Image</label>
            <input type="text" className="form-control" placeholder="Image" required value={image} data-statekey='image' onChange={this._onInputChange}/>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" className="form-control" placeholder="Phone" required value={phone} data-statekey='phone' onChange={this._onInputChange}/>
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" className="form-control" placeholder="Location" required value={location} data-statekey='location' onChange={this._onInputChange}/>
          </div> */}
          <div className="col-xs-12 text-center">
            <RaisedButton
            label="Submit"
            labelPosition="before"
            type='submit'
            className='editBtn'/>
          </div>
        </form>
      </div>
    )
  }
}
