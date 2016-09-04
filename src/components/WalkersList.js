import React, { Component } from 'react';
import { Link } from 'react-router';

 export default class WalkersList extends Component {

  constructor(props){
    super(props);
    // this.deleteMe=this.deleteMe.bind(this);
    // this.updateMe=this.updateMe.bind(this);
  }
  //  deleteMe(e){
  //   console.log("please delete me!!!", e.target.id);
  //   this.props.deletePokemon(e.target.id);
  //
  //  }
  //
  //  updateMe(e){
  //   var name = prompt("Enter the name");
  //   var number= prompt("Enter Number");
  //   var image = prompt("Enter Image");
  //   var newVal = {"name":name,"number":number,"image":image};
  //   console.log("updateMe please");
  //   this.props.updatePokemon(newVal,e.target.id);
  //  }
  //
  render() {
    let {walkers} = this.props;
    // let {pokemon, sort, deletePokemon} = this.props;
    // if(sort){
    //   pokemon.sort((a,b)=>{
    //     if(a[sort] <  b[sort]){
    //       return -1;
    //     }
    //     else if(a[sort] >  b[sort]) {
    //       return 1;
    //     }
    //     else{
    //       return 0;
    //     }
    //   })
    // }
     let Walkers = walkers.map(walker =>{
      let {_id, name, phone, hours, image, location} = walker;

      let path = '/walkers/' + _id;

       return (
        <div className="col-xs-12 col-md-4" key ={_id}>
         <div>
           <Link to={path}><img src={image} width = "150 px" alt=""/></Link>
         </div>
         <div>
           <h3>{name}</h3>
           <p>{phone}</p>
           <div>
           {/* <button id ={_id} className ="btn btn-danger" onClick={this.deleteMe}>Delete</button>
           <button id={_id} className = "btn btn-success" onClick={this.updateMe}>Update</button> */}
           </div>
         </div>
        </div>
        )
     })
     return <div>
       {Walkers}
     </div>

  }
}
