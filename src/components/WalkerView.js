import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { Modal, Button } from 'react-bootstrap';
import { getProfile, addWalker } from '../actions/OwnerActions';
import { getWalker, deleteWalker, updateWalker } from '../actions/WalkerActions';

@connect(
state =>({
  detail: state.detail,
  ownerId: state.owner._id
}),
dispatch =>({
  getWalker(id) {
    dispatch(getWalker(id))
  },
  getProfile() {
    dispatch(getProfile())
  },
  deleteWalker(id) {
    dispatch(deleteWalker(id))
  },
  updateWalker(id, newVal) {
    dispatch(updateWalker(id, newVal))
  },
  addWalker(ownerId, walkerId) {
    dispatch(addWalker(ownerId, walkerId))
  }
}))
export default class WalkerView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      name: '',
      hours: '',
      image: '',
      phone: '',
      location: ''
    }

    this._deleteWalker = this._deleteWalker.bind(this);
    this._updateWalker = this._updateWalker.bind(this);
    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this._onInputChange = this._onInputChange.bind(this);
    this._hire = this._hire.bind(this);
  }

  componentWillMount() {
    this.props.getWalker(this.props.params.id);
    this.props.getProfile()
  }

  _deleteWalker() {
    this.props.deleteWalker(this.props.params.id);
    browserHistory.push('/walkers');
  }

  _openModal() {
    this.setState({
      showModal: true
    });
  }

  _closeModal() {
    this.setState({showModal: false});
  }

  _onInputChange(e) {
    let key = e.target.dataset.type;
    let value = e.target.value;

    this.setState({
      [key]: value
    })
  }

  _updateWalker(e) {
    e.preventDefault();
    let { name, hours, image, phone, location } = this.state;
    let newVal = { name, hours, image, phone, location }
    this.props.updateWalker(this.props.params.id, newVal);
    this._closeModal();
  }

  _hire(e) {
    e.preventDefault();
    this.props.addWalker(this.props.ownerId, this.props.params.id);
  }

  render() {
    let { detail } = this.props;

    return (
      <div>
        <h1 className="text-center">Walker View</h1>
        <img src={detail.image} alt=""/>
        <h3>Hours: {detail.hours}</h3>
        <button className="btn btn-danger" onClick={this._deleteWalker}>Delete</button>
        <button className="btn btn-warning" onClick={this._openModal}>Update</button>
        <button className="btn btn-success" onClick={this._hire}>Hire</button>

        <Modal show={this.state.showModal} onHide={this._closeModal}>
          <form onSubmit={this._updateWalker}>
            <Modal.Header closeButton>
              <Modal.Title>Update Walker</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>
                Name:
                <input type="text" data-type='name' onChange={this._onInputChange}  value={this.state.name} required/>
              </label>
              <label>
                Hours:
                <input type="text" data-type='hours' onChange={this._onInputChange} value={this.state.hours} required/>
              </label>
              <label>
                Image:
                <input type="text" data-type='image' onChange={this._onInputChange} value={this.state.image} required/>
              </label>
              <label>
                Phone:
                <input type="text" data-type='phone' onChange={this._onInputChange} value={this.state.phone} required/>
              </label>
              <label>
                Location:
                <input type="text" data-type='location' onChange={this._onInputChange} value={this.state.location} required/>
              </label>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-success" type="submit">Save</Button>
              <Button onClick={this._closeModal}>Close</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    )
  }
}
