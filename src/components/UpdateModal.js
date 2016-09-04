import React, { Component } from 'react';

export default class WalkerView extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      todoText: '',
      todoIndex: '',
      filterText: '',
      sorted: ''
    }

    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this._onInputChange = this._onInputChange.bind(this);
  }

  _openModal(index, todo) {
    this.setState({
      showModal: true,
      todoText: todo,
      todoIndex: index
    });
  }

  _closeModal() {
    this.setState({showModal: false});
  }

  _onInputChange(e) {
    this.setState({
      todoText: e.target.value
    })
  }
  render() {
    return (
        <Modal show={this.state.showModal} onHide={this._closeModal}>
          <form onSubmit={this._edit}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" value={this.state.todoText} onChange={this._onInputChange}/>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-success" type="submit">Save</Button>
              <Button onClick={this._closeModal}>Close</Button>
            </Modal.Footer>
          </form>
        </Modal>
    )
  }
}
