import axios from 'axios'
import RouteActions from './RouteActions'
//import UserActions from './actions/UserActions'
//import ServerActions from './actions/ServerActions'


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
      .then(() => {
        RouteActions.route('/login');
      })
      .catch(console.error)
}

// export function getWalker(id){
//   return dispatch =>{
//     axios.get(`/api/walkers/${id}`)
//          .then(res => res.data)
//          .then(walker => {
//           dispatch(receiveOneWalker(walker))
//          })
//          .catch(console.error)
//   }
// }

export function login (owner) {
  return dispatch => {
    axios.post('/api/owners/login', owner)
    .then(() => {
      dispatch(getProfile())
      RouteActions.route('/loginSuccess')
    })
    .catch(console.error)
  }
}

export function logout() {
  return dispatch => {
    axios.post('/api/owners/logout')
    .then(() => {
      RouteActions.route('/');
      dispatch(removeProfile());
    })
    .catch(console.error)
  }
}

export function getProfile() {
  return dispatch => {
    axios.get('/api/owners/profile')
    .then(res => res.data)
    .then(profile => {
      dispatch(receiveProfile(profile))
    })
    .catch(console.error)
  }
}

export function updateProfile(id, obj) {
  return dispatch => {
    axios.put(`/api/owners/${id}`, obj)
    .then(res => res.data)
    .then(profile => {
      dispatch(receiveProfile(profile));
      RouteActions.route('/loginSuccess');
    })
    .catch(console.error)
  }
}

export function addWalker(ownerId, walkerId) {
  return dispatch => {
    axios.put(`/api/owners/${ownerId}/addWalker/${walkerId}`)
    .then(res => res.data)
    .then(profile => {
      dispatch(receiveProfile(profile));
      RouteActions.route('/walkers');
    })
    .catch(console.error)
  }
}

export function removeWalker(ownerId) {
  return dispatch => {
    axios.put(`/api/owners/removeWalker/${ownerId}`)
      .then(res => res.data)
      .then(profile => {
        dispatch(receiveProfile(profile));
      })
      .catch(console.error)
  }
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
