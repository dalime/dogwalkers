import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchPokemon, createPokemon, changeSort, deletePokemon ,updatePokemon} from '../actions/PokemonActions'
import  PokemonList from './PokemonList'
import FormModal from './FormModal'
import SortSelect from './SortSelect'



@connect(state =>({
  pokemon:state.pokemon,
  sort:state.ui.sort
}),
dispatch =>({
  fetchPokemon() {
    dispatch(fetchPokemon())
  },
  createPokemon(pokemon){
    dispatch(createPokemon(pokemon))
  },
  changeSort(value){
    dispatch(changeSort(value))
  },
  deletePokemon(id){
    dispatch(deletePokemon(id))
  },
  updatePokemon(newVal,id){
    dispatch(updatePokemon(newVal,id))
  }
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


 export default class  PokemonPage extends Component {

  constructor(){
    super();
    this._submitForm = this._submitForm.bind(this);
  }

  _submitForm(pokemon){
    pokemon.types = pokemon.types.split(',').map(type=>type.trim()).filter(type=>type)
    //console.log('formdata',formdata);

    this.props.createPokemon(pokemon)
  }

  componentWillMount(){
    this.props.fetchPokemon();
  }

  render() {
    let {pokemon , sort, changeSort, deletePokemon, updatePokemon} = this.props;
    let modalId = 'NewPokemonModal'
    let schema = {
      name:{type:'text',label:'Name', required:true},
      number:{type:'number',label:'Pokemon Num', required:true},
      image:{type:'text',label:'Image URL', required:true},
      types:{type:'text',label:'Types:(Enter types sepearted by commas)'}

    }
    console.log(this.props.pokemon);
    return (
      <div>
      <h1 className="text-center">pokemon page!</h1>
      <button
      className="btn btn-success"
      data-toggle='modal'
      data-target={'#'+modalId}>Create New Pokemon
      </button>
      <SortSelect changeSort = {changeSort}/>
      <PokemonList pokemon={pokemon} sort={sort} deletePokemon={deletePokemon} updatePokemon={updatePokemon} />


      <FormModal
      modalId= {modalId}
      title={'New Pokemon'}
      submitForm= {this._submitForm}
      schema= {schema}
      />
      </div>
    )
  }
}
