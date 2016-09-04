import axios from 'axios'
import RouteActions from './actions/RouteActions'
import UserActions from './actions/UserActions'
import ServerActions from './actions/ServerActions'


export function receiveProfile(profile) {
  return {
    type: 'RECEIVE_PROFILE',
    payload: { profile }
  }
}

export function removeProfile() {
  return {
    type: 'REMOVE_PROFILE'
  }
}

export function register(owner) {
    axios.post('/api/owners/register', owner)
      .then(res => {
        RouteActions.route('/login');
      })
      .catch(console.error)
}

export function login(owner) {
    axios.post('/api/owners/login', owner)
      .then(() => {
        dispatch(getProfile())
        RouteActions.route('/loginSuccess');
      })
      .catch(console.error)
}

export function logout() {
    axios.post('/api/owners/logout')
      .then(() => {
        dispatch(removeProfile());
        RouteActions.route('/');
      })
      .catch(console.error)
}

export function getProfile() {
    axios.get('/api/owners/profile')
      .then(res => res.data)
      .then(profile => {
        dispatch(receiveProfile(profile))
      })
      .catch(console.error)
}

export function updateProfile(id, obj) {
  axios.put(`/api/owners/update/${id}`, obj)
    .then(res => res.data)
    .then(profile => {
      dispatch(receiveProfile(profile));
      RouteActions.route('/profile');
    })
    .catch(console.error)
}
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
