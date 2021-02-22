import { TimezoneState, Zones } from './types'

export const getTimeZones = (state: TimezoneState): Zones[] => state.zone.data

export const getSelector = (zone: Zones): string =>
  zone ? zone.countryName.concat(', ').concat(zone.zoneName) : ''
