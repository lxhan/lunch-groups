import { Dispatch } from 'redux'
import { PeopleActionTypes } from '../types/people'

export const fetchPeople = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({
      type: PeopleActionTypes.FETCH_REQUEST,
    })

    const res = await fetch('/people')
    const data = await res.json()

    dispatch({
      type: PeopleActionTypes.FETCH_SUCCESS,
      payload: data,
    })
  } catch (err) {
    console.error(err)
    dispatch({
      type: PeopleActionTypes.FETCH_ERROR,
      payload: err,
    })
    throw err
  }
}

export const addPerson = (name: string) => async (
  dispatch: Dispatch,
): Promise<void> => {
  try {
    dispatch({
      type: PeopleActionTypes.ADD_REQUEST,
    })

    const res = await fetch('/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify({ name }),
    })
    const data = await res.json()

    if (res.status === 409) {
      dispatch({
        type: PeopleActionTypes.ADD_ERROR,
        payload: data,
      })
    }

    dispatch({
      type: PeopleActionTypes.ADD_SUCCESS,
      payload: data,
    })
  } catch (err) {
    console.error(err)
    dispatch({
      type: PeopleActionTypes.ADD_ERROR,
      payload: err,
    })
    throw err
  }
}

export const deletePerson = (id: string) => async (
  dispatch: Dispatch,
): Promise<void> => {
  try {
    dispatch({
      type: PeopleActionTypes.DELETE_REQUEST,
    })

    const res = await fetch(`/delete/${id}`, {
      method: 'DELETE',
      credentials: 'same-origin',
    })
    const data = await res.json()

    dispatch({
      type: PeopleActionTypes.DELETE_SUCCESS,
      payload: data,
    })
  } catch (err) {
    console.error(err)
    dispatch({ type: PeopleActionTypes.DELETE_ERROR, payload: err })
    throw err
  }
}
