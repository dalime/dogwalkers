// import React, { Component } from 'react';
//
//
//  export default class PokemonList extends Component {
//
//   constructor(){
//     super();
//     this.deleteMe=this.deleteMe.bind(this);
//     this.updateMe=this.updateMe.bind(this);
//   }
//    deleteMe(e){
//     console.log("please delete me!!!", e.target.id);
//     this.props.deletePokemon(e.target.id);
//
//    }
//
//    updateMe(e){
//     var name = prompt("Enter the name");
//     var number= prompt("Enter Number");
//     var image = prompt("Enter Image");
//     var newVal = {"name":name,"number":number,"image":image};
//     console.log("updateMe please");
//     this.props.updatePokemon(newVal,e.target.id);
//    }
//
//   render() {
//
//     let {pokemon, sort, deletePokemon} = this.props;
//     if(sort){
//       pokemon.sort((a,b)=>{
//         if(a[sort] <  b[sort]){
//           return -1;
//         }
//         else if(a[sort] >  b[sort]) {
//           return 1;
//         }
//         else{
//           return 0;
//         }
//       })
//     }
//      let Pokemon = pokemon.map(p =>{
//       let {_id,name, number,types,image} = p;
//
//        return (
//         <div className="col-xs-12 col-md-4" key ={_id}>
//          <div>
//            <img src={image} width = "150 px" alt=""/>
//          </div>
//          <div>
//            <h3>{name}</h3>
//            <p>Id:{number}</p>
//            <div>
//            <button id ={_id} className ="btn btn-danger" onClick={this.deleteMe}>Delete</button>
//            <button id={_id} className = "btn btn-success" onClick={this.updateMe}>Update</button>
//            </div>
//          </div>
//         </div>
//         )
//      })
//      return <div>
//        {Pokemon}
//      </div>
//
//   }
// }
//
//
//
//   
