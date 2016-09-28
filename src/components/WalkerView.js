import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { Modal, Button } from 'react-bootstrap';
import { getProfile, addWalker } from '../actions/OwnerActions';
import { getWalker, deleteWalker, updateWalker } from '../actions/WalkerActions';
import { TextField, RaisedButton } from 'material-ui';

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
    let style = {
      borderColor: '#000'
    }
    let { _id, hours, image, location, name, phone } = this.props.detail;

    return (
      <div className='col-xs-12 col-md-6 col-md-offset-3 text-center'>
        <div className='walkerProfFrame'>
          <h2 className="text-center">{name}</h2>
          <img src={image}/>
          <div className='walkerProfText'>
            <h5>Location: {location}</h5>
            <h5>Hours: {hours}</h5>
            <h5>Phone: {phone}</h5>
          </div>
        </div>
        <div className="text-center">
          <RaisedButton
            label="Edit"
            labelPosition="before"
            className='editBtn'
            onClick={this._openModal}/>
          <RaisedButton
            label="Hire"
            labelPosition="before"
            className='editBtn'
            onClick={this._hire}/>
        </div>

        <Modal show={this.state.showModal} onHide={this._closeModal} className='Modal'>
          <form onSubmit={this._updateWalker}>
            <Modal.Header closeButton>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TextField
                hintText='Name'
                className="editInput" floatingLabelFixed={true} id='name'
                onChange={this._onInputChange} data-type="name"
                underlineFocusStyle={style} value={this.state.name} required
              />
              <TextField
                hintText='Hours'
                className="editInput" floatingLabelFixed={true} id='hours'
                onChange={this._onInputChange} data-type="hours"
                underlineFocusStyle={style} value={this.state.hours} required
              />
              <TextField
                hintText='Image'
                className="editInput" floatingLabelFixed={true} id='image'
                onChange={this._onInputChange} data-type="image"
                underlineFocusStyle={style} value={this.state.image} required
              />
              <TextField
                hintText='Phone'
                className="editInput" floatingLabelFixed={true} id='phone'
                onChange={this._onInputChange} data-type="phone"
                underlineFocusStyle={style} value={this.state.phone} required
              />
              <TextField
                hintText='Location'
                className="editInput" floatingLabelFixed={true} id='location'
                onChange={this._onInputChange} data-type="location"
                underlineFocusStyle={style} value={this.state.location} required
              />
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
