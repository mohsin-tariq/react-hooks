import { TimezoneState, Zones } from './types'

export const getTimeZones = (state: TimezoneState) => state.zone.data

export const getSelector = (zone: Zones) =>
  zone ? zone.countryName.concat(', ').concat(zone.zoneName) : ''
