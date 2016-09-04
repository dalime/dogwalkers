import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWalkers, createWalker } from '../actions/WalkerActions'
// import {fetchPokemon, createPokemon, changeSort, deletePokemon ,updatePokemon} from '../actions/PokemonActions'
import WalkersList from './WalkersList'
import WalkerView from './WalkerView';
import SortSelect from './SortSelect'



@connect(
state =>({
  walkers: state.walkers
  // sort:state.ui.sort
}),
dispatch =>({
  fetchWalkers() {
    dispatch(fetchWalkers())
  },
  createWalker(walker){
    dispatch(createWalker(walker))
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
/*
export default connect(
  state => ({
      pokemon: state.pokemon
  }),
  dispatch => {
    return {
      fetchPokemon(){
        dispatch(fetchPokemon())
      }
    }
  }
)(PokemonPage)*/


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
    //pokemon.types = pokemon.types.split(',').map(type=>type.trim()).filter(type=>type)
    //console.log('formdata',formdata);

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

    // const walkerSchema = new mongoose.Schema({
    //   name:{type:String, required:true},
    //   hours:{type:Number, required:true},
    //   image:{type:String},
    //   phone:{type:String, required: true},
    //   location:{type:String, required: true}
    // });

    return (
      <div>
        <h1>Hello</h1>
        <form className="form-group" onSubmit={this._submitForm}>
        <label>
        Name:
        <input type="text" data-type="name" className="form-control" onChange={this._onInputChange}/>
        </label>
        <label>
        Hours:
        <input type="text" data-type="hours" className="form-control" onChange={this._onInputChange}/>
        </label>
        <label>
        Image:
        <input type="text" data-type="image" className="form-control" onChange={this._onInputChange}/>
        </label>
        <label>
        Phone:
        <input type="text" data-type="phone" className="form-control" onChange={this._onInputChange}/>
        </label>
        <label>
        Location:
        <input type="text" data-type="location" className="form-control" onChange={this._onInputChange}/>
        </label>
        <button className="btn btn-success">
        Submit
        </button>
        </form>
        <WalkersList walkers={walkers}/>

        {/* <FormModal
        modalId= {modalId}
        title={'New Walker'}
        submitForm= {this._submitForm}
        schema= {schema}
        /> */}
      </div>
      // <div>
      // <h1 className="text-center">pokemon page!</h1>
      // <button
      // className="btn btn-success"
      // data-toggle='modal'
      // data-target={'#'+modalId}>Create New Pokemon
      // </button>
      // <SortSelect changeSort = {changeSort}/>
      // <PokemonList pokemon={pokemon} sort={sort} deletePokemon={deletePokemon} updatePokemon={updatePokemon} />
      //
      //
      // </div>
    )
  }
}
