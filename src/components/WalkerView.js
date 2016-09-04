import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { getWalker, deleteWalker } from '../actions/WalkerActions'

@connect(
state =>({
  detail: state.detail
  // sort:state.ui.sort
}),
dispatch =>({
  getWalker(id) {
    dispatch(getWalker(id))
  },
  deleteWalker(id) {
    dispatch(deleteWalker(id))
  },
  updateWalker(newVal, id) {
    dispatch(updateWalker(newVal, id))
  }
  // changeSort(value){
  //   dispatch(changeSort(value))
  // },
  // deletePokemon(id){
  //   dispatch(deletePokemon(id))
  // },
  // updatePokemon(newVal,id){
  //   dispatch(updatePokemon(newVal,id))
  // }
}))
export default class WalkerView extends Component {
  constructor() {
    super();

    this._deleteWalker = this._deleteWalker.bind(this);
    this._updateWalker = this._updateWalker.bind(this);
  }

  componentWillMount() {
    this.props.getWalker(this.props.params.id);
  }

  _deleteWalker() {
    this.props.deleteWalker(this.props.params.id);
    browserHistory.push('/walkers');
  }

  _updateWalker() {
    this.props.updateWalker(this.props.params.id);
  }

  render() {
    let { detail } = this.props;

    return (
      <div>
        <h1 className="text-center">Walker View</h1>
        <img src={detail.image} alt=""/>
        <h3>Hours: {detail.hours}</h3>
        <button className="btn btn-danger" onClick={this._deleteWalker}>Delete</button>
        <button className="btn btn-warning" onClick={this._updateWalker}>Update</button>
      </div>
    )
  }
}
