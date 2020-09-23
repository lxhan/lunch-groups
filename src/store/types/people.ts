export enum PeopleActionTypes {
  FETCH_REQUEST = 'FETCH_REQUEST',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
  ADD_REQUEST = 'ADD_REQUEST',
  ADD_SUCCESS = 'ADD_SUCCESS',
  ADD_ERROR = 'ADD_ERROR',
  DELETE_REQUEST = 'DELETE_REQUEST',
  DELETE_SUCCESS = 'DELETE_SUCCESS',
  DELETE_ERROR = 'DELETE_ERROR',
}

export interface PeopleState {
  readonly loading: boolean
  readonly data: APIData
  readonly error?: any
}
