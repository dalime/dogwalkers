// //synchronous action creator
// import axios from 'axios'
// export function receiveOwners(owners){
//   return {
//     type:'RECEIVE_OWNER',
//     payload:{owners}
//   }
// }
//
//
// //asynchronous action creator
// export function fetchOwners(){
//   return dispatch => {
//    axios.get('/api/owners')
//         .then(res=>res.data)
//         .then(owners =>{
//           dispatch(receiveOwners(owners));
//         })
//         .catch(console.error);
//   }
// }
//
// export function createOwner(owners){
//   return dispatch =>{
//     axios.post('/api/owners',owners)
//          .then(()=>{
//           dispatch(fetchOwners())
//          })
//          .catch(console.error)
//   }
// }
//
// export function deleteOwner(id){
//     console.log("id in action....", id);
//   return dispatch =>{
//     axios.delete('/api/owners/'+id)
//           .then(()=>{
//           dispatch(fetchOwners())
//          })
//          .catch(console.error)
//   }
// }
//
// export function updateOwner(newVal,id){
//   console.log("newVal",newVal);
//     console.log("id in updateOwner action....", id);
//   return dispatch =>{
//     axios.put('/api/owners/'+id , newVal)
//           .then(()=>{
//           dispatch(fetchOwners())
//          })
//          .catch(console.error)
//   }
// }
// export function changeSort(value){
//   return {
//     type:'CHANGE_SORT',
//     payload:{value}
//   }
// }
