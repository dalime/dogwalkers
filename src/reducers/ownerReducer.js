export default function ownerReducer (state = {}, action) {
  switch(action.type){
    case 'RECEIVE_PROFILE': {
      return action.payload.profile;
    }
    case 'REMOVE_PROFILE': {
      return null;
    }
    default:
      return state;
  }
}
