import { Reducer } from 'redux'

import { PeopleActionTypes, PeopleState } from '../types/people'

const initialState: PeopleState = {
  loading: false,
  data: {
    message: '',
    person: {
      _id: '',
      name: '',
    },
    people: [],
  },
  error: undefined,
}

export const peopleReducer: Reducer<PeopleState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case PeopleActionTypes.FETCH_REQUEST:
    case PeopleActionTypes.ADD_REQUEST:
    case PeopleActionTypes.DELETE_REQUEST:
      return { ...state, loading: true }
    case PeopleActionTypes.FETCH_SUCCESS:
    case PeopleActionTypes.ADD_SUCCESS:
    case PeopleActionTypes.DELETE_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    case PeopleActionTypes.FETCH_ERROR:
    case PeopleActionTypes.ADD_ERROR:
    case PeopleActionTypes.DELETE_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
