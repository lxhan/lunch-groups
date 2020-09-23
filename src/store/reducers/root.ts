import { combineReducers } from 'redux'
import { peopleReducer } from './people'
import { groupReducer } from './groups'

const rootReducer = combineReducers({
  people: peopleReducer,
  groups: groupReducer,
})

export default rootReducer
