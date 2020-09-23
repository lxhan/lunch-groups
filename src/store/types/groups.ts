export enum GroupActionTypes {
  FETCH_REQUEST = 'FETCH_REQUEST',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
  MAKE_REQUEST = 'MAKE_REQUEST',
  MAKE_SUCCESS = 'MAKE_SUCCESS',
  MAKE_ERROR = 'MAKE_ERROR',
}

export interface GroupState {
  readonly loading: boolean
  readonly data: IPerson[][]
  readonly error?: any
}
