import { UPDATE_TIMEZONE_DETAIL, FETCH_TIMEZONES } from './actionTypes'

interface UpdateTimeZoneAction {
  type: typeof UPDATE_TIMEZONE_DETAIL
  payload: Zones[]
}
interface FetchTimeZone {
  type: typeof FETCH_TIMEZONES
  payload: Zones[]
}

export type TimezoneActionTypes = UpdateTimeZoneAction | FetchTimeZone

export interface Zones {
  countryCode: string
  countryName: string
  zoneName: string
  gmtOffset: number
  timestamp: number
}
export interface TimezoneState {
  zone: {
    data: Zones[]
  }
}
