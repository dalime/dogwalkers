import React, { Component } from 'react';
import { register } from '../actions/OwnerActions';

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

    return (
      <div>
        <form onSubmit={this._submit}>
          <div className="form-group">
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
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}
