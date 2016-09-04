import {combineReducers} from 'redux'
import walkers from './walkerReducer'
import detail from './detailReducer'
import owner from './ownerReducer'

export default combineReducers({
  walkers,
  detail,
  owner
})
