import { combineReducers } from 'redux'
import bookmark from './reader/bookmark'
import current from './reader/current'
import list from './reader/list'
import speed from './reader/speed'

const reducers = combineReducers({
  bookmark,
  current,
  list,
  speed
})

export default reducers