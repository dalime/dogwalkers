// //thunk
//
// //synchronous action creator
// import axios from 'axios'
// export function receiveWalkers(walkers){
//   return {
//     type:'RECEIVE_WALKER',
//     payload:{walkers}
//   }
// }
//
//
// //asynchronous action creator
// export function fetchWalkers(){
//   return dispatch => {
//    axios.get('/api/walkers')
//         .then(res=>res.data)
//         .then(walkers =>{
//           dispatch(receiveWalkers(walkers));
//         })
//         .catch(console.error);
//   }
// }
//
// export function createWalker(walkers){
//   return dispatch =>{
//     axios.post('/api/walkers',walkers)
//          .then(()=>{
//           dispatch(fetchWalkers())
//          })
//          .catch(console.error)
//   }
// }
//
// export function deleteWalker(id){
//     console.log("id in action....", id);
//   return dispatch =>{
//     axios.delete('/api/walkers/'+id)
//           .then(()=>{
//           dispatch(fetchWalkers())
//          })
//          .catch(console.error)
//   }
// }
//
// export function updateWalker(newVal,id){
//   console.log("newVal",newVal);
//     console.log("id in updateWalker action....", id);
//   return dispatch =>{
//     axios.put('/api/walkers/'+id , newVal)
//           .then(()=>{
//           dispatch(fetchWalkers())
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
//
// /*
// export function updateMe(newVal,id){
//   //console.log("inside updateMeaqction", newVal,id);
//   return{
//     type: 'UPDATE_ME',
//     payload: {newVal,id}
//   }
// }
// */
