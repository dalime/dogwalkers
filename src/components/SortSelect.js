//
// import React, {Component} from 'react'
// //
// //@connect
//
//
// export default class SortSelect extends Component {
//   constructor(){
//     super();
//     this.state = {
//       value:''
//     }
//     this._onChange = this._onChange.bind(this);
//   }
//
//
//   _onChange(e){
//     let {value} = e.target;
//     console.log('value ',value)
//     this.props.changeSort(value);
//   }
//   render(){
//     let {value} = this.state;
//
//      return <div className="form-group" value={value} onChange={this._onChange}>
//      <label >Sort By</label>
//       <select className="form-control" >
//             <option value = {null}>Select</option>
//             <option value = 'name'>Name</option>
//             <option value = 'number'>Id</option>
//             <option></option>
//           </select>
//       </div>
//   }
// }
