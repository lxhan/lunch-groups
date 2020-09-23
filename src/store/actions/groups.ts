import { Dispatch } from 'redux'
import { GroupActionTypes } from '../types/groups'

export const addGroup = (groups: IPerson[][]) => (dispatch: Dispatch): void => {
  try {
    dispatch({
      type: GroupActionTypes.MAKE_REQUEST,
    })

    dispatch({
      type: GroupActionTypes.MAKE_SUCCESS,
      payload: groups,
    })
  } catch (err) {
    console.error(err)
    dispatch({
      type: GroupActionTypes.MAKE_ERROR,
      payload: err,
    })
    throw err
  }
}
