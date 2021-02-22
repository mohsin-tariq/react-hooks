import { FETCH_TIMEZONES } from './actionTypes'
import { TimezoneActionTypes } from './types'

const initialState = {
  data: [],
}

export default (state = initialState, action: TimezoneActionTypes) => {
  switch (action.type) {
    case FETCH_TIMEZONES: {
      return {
        ...state,
        data: [...action.payload],
      }
    }
    default:
      return state
  }
}
