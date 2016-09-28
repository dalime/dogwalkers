import React, { Component } from 'react';
import { Link } from 'react-router';

 export default class WalkersList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let {walkers} = this.props;
    let Walkers = walkers.map(walker => {
      let { _id, name, phone, hours, image, location } = walker;
      let path = '/walkers/' + _id;

       return (
        <div className="col-xs-12 col-md-4 walker" key ={_id}>
         <div>
<<<<<<< HEAD
          <Link to={path}>
            <img src={image} width = "150 px" alt=""/>
          </Link>
         </div>
         <div>
          <h3>{name}</h3>
            <p>{phone}</p>
          </div>
=======
           <Link to={path}><div style={{'backgroundImage': `url(${image})`}} className='imgDiv'></div></Link>
         </div>
         <div className='text-center'>
           <h3>{name}</h3>
           <p>{phone}</p>
           <div>
           {/* <button id ={_id} className ="btn btn-danger" onClick={this.deleteMe}>Delete</button>
           <button id={_id} className = "btn btn-success" onClick={this.updateMe}>Update</button> */}
           </div>
         </div>
>>>>>>> 97612abcbe9c1d0019b78e82bb7e53acf6c446b8
        </div>
        )
     })
     return <div>
       {Walkers}
     </div>
  }
}
