import React, { Component } from 'react';
import { Link } from 'react-router';

 export default class WalkersList extends Component {

  constructor(props){
    super(props);

  }

  render() {
    let {walkers} = this.props;

     let Walkers = walkers.map(walker =>{
      let {_id, name, phone, hours, image, location} = walker;

      let path = '/walkers/' + _id;

       return (
        <div className="col-xs-12 col-md-4 walker" key ={_id}>
         <div>
           <Link to={path}><div style={{'backgroundImage': `url(${image})`}} className='imgDiv'></div></Link>
         </div>
         <div className='text-center'>
           <h3>{name}</h3>
           <p>{phone}</p>
           <div>
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
