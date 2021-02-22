import { FETCH_TIMEZONES } from './actionTypes'

interface FetchTimeZone {
  type: typeof FETCH_TIMEZONES
  payload: Zones[]
}

export type TimezoneActionTypes = FetchTimeZone

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
