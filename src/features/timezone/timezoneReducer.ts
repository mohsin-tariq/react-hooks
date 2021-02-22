import { FETCH_TIMEZONES, UPDATE_TIMEZONE_DETAIL } from './actionTypes'
import { TimezoneActionTypes } from './types'

const initialState = {
  data: [],
}

/**
 *
 * @param dataList
 * @param payload
 * get updateListItem of Updated Zone
 */
const updateListItem = (list, updated) => {
  const index = list.findIndex((item) => item.zoneName === updated[0].zoneName)
  return [...list.slice(0, index), ...updated, ...list.slice(index + 1)]
}
// const updateListItem = (list, updated) =>
//   list.map((listItem) =>
//     listItem.zoneName === updated[0].zoneName ? updated[0] : listItem
//   )

export default (state = initialState, action: TimezoneActionTypes) => {
  switch (action.type) {
    case FETCH_TIMEZONES: {
      return {
        ...state,
        data: [...action.payload],
      }
    }
    case UPDATE_TIMEZONE_DETAIL: {
      return {
        data: updateListItem(state.data, action.payload),
      }
    }
    default:
      return state
  }
}
