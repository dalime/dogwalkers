export default function walkerReducer(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_WALKERS':
      return action.payload.walkers;
      break;
    default:
      return state;
  }
}
