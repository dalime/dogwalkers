
export default function walkerReducer(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_WALKERS':
      return action.payload.walkers;
      break;
    // case 'UPDATE_ME':
    //  return state.map((newVal,id)=>{
    //       if(action.payload.id= id) {
    //         return action.payload.newVal;
    //       }
    //       else{
    //         return newVal;
    //       }
    //     })

    default:
      return state;
  }
}
