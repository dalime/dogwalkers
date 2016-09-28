export default function detailReducer(state = {}, action) {
  switch(action.type) {
    case 'RECEIVE_ONE_WALKER':
      return action.payload.walker;
      break;
    default:
      return state;
  }
}
