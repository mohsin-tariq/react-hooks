import { render } from '../../../testUtils'
import TimezoneDetail from '../../../components/TimeZone/TimezoneDetail'


describe('TimezoneDetail', () => {
  it('render Snapshot', () => {
    const props = {
        countryCode: 'AD',
        countryName: 'Andorra',
        zoneName: 'Europe/Andorra',
        gmtOffset: 3600,
        timestamp: 1614084530,
      }

    const { asFragment } = render(<TimezoneDetail zoneDetail={props} setZoneDetail={jest.fn()} fetchData={jest.fn()}/>)
    expect(asFragment()).toMatchSnapshot()
  })
})