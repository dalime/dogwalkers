import {combineReducers} from 'redux'
import walkers from './walkerReducer'
import detail from './detailReducer'
//import ui from './uiReducer'

export default combineReducers({
  walkers,
  detail
})
