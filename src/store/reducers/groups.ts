import { Reducer } from 'redux'

import { GroupActionTypes, GroupState } from '../types/groups'

const initialState: GroupState = {
  loading: false,
  data: [],
  error: undefined,
}

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case GroupActionTypes.FETCH_REQUEST:
    case GroupActionTypes.MAKE_REQUEST:
      return { ...state, loading: true }
    case GroupActionTypes.FETCH_SUCCESS:
    case GroupActionTypes.MAKE_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    case GroupActionTypes.FETCH_ERROR:
    case GroupActionTypes.MAKE_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
