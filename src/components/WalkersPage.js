import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWalkers, createWalker } from '../actions/WalkerActions';
import WalkersList from './WalkersList';
import WalkerView from './WalkerView';
import SortSelect from './SortSelect';

@connect(
state =>({
  walkers: state.walkers
}),
dispatch =>({
  fetchWalkers() {
    dispatch(fetchWalkers())
  },
  createWalker(walker){
    dispatch(createWalker(walker))
  }
}))

 export default class  WalkersPage extends Component {
  //
  constructor(){
    super();

    this.state = {
      name: '',
      hours: '',
      image: '',
      phone: '',
      location: ''
    }

    this._submitForm = this._submitForm.bind(this);
    this._onInputChange = this._onInputChange.bind(this);
  }

  _submitForm(e){
    e.preventDefault();
    this.props.createWalker(this.state)
  }

  componentWillMount() {
    this.props.fetchWalkers();
  }

  _onInputChange(e) {
    let key = e.target.dataset.type;
    let value = e.target.value;

    this.setState({
      [key]: value
    });
  }

  render() {
    let { walkers } = this.props;

    return (
      <div>
        <h1 className='text-center'>Dog Walkers</h1>
        <WalkersList walkers={walkers}/>
      </div>
    )
  }
}
