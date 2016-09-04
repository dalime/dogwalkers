import axios from 'axios';
// //thunk
//
// //synchronous action creator
// import axios from 'axios'
export function receiveWalkers(walkers){
  return {
    type:'RECEIVE_WALKERS',
    payload:{walkers}
  }
}
//
//
// //asynchronous action creator
export function fetchWalkers(){
  return dispatch => {
   axios.get('/api/walkers')
        .then(res => res.data)
        .then(walkers =>{
          dispatch(receiveWalkers(walkers));
        })
        .catch(console.error);
  }
}
//
export function createWalker(walker){
  return dispatch =>{
    axios.post('/api/walkers',walker)
         .then(()=>{
          dispatch(fetchWalkers())
         })
         .catch(console.error)
  }
}

export function receiveOneWalker(walker) {
  return {
    type: 'RECEIVE_ONE_WALKER',
    payload: { walker }
  }
}

export function getWalker(id){
  return dispatch =>{
    axios.get(`/api/walkers/${id}`)
         .then(res => res.data)
         .then(walker => {
          dispatch(receiveOneWalker(walker))
         })
         .catch(console.error)
  }
}


//
export function deleteWalker(id) {
  return dispatch =>{
    axios.delete(`/api/walkers/${id}`)
          .then(()=>{
          dispatch(fetchWalkers())
         })
         .catch(console.error)
  }
}
//
export function updateWalker(id, newVal) {
  return dispatch =>{
    axios.put(`/api/walkers/${id}` , newVal)
      .then(res => res.data)
      .then(walker => {
        dispatch(receiveOneWalker(walker))
      })
      .catch(console.error)
  }
}
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
