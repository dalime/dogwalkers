export default function ownerReducer (state = {},action) {
  switch(action.type){
    case 'RECEIVE_PROFILE':
      return action.payload.profile;
      break;
    case 'REMOVE_PROFILE':
      return null;
      break;
    default:
      return state;
  }
}
