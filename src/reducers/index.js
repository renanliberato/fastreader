import { combineReducers } from 'redux'
import bookmark from './reader/bookmark'
import current from './reader/current'
import list from './reader/list'

const reducers = combineReducers({
  bookmark,
  current,
  list
})

export default reducers