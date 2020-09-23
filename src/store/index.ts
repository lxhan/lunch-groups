import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root'
import { PeopleState } from './types/people'
import { GroupState } from './types/groups'

export interface AppState {
  people: PeopleState
  groups: GroupState
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export default store
