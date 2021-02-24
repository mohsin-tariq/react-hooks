import React from 'react';
import { render, fireEvent, screen } from '../../testUtils'
import DropDownComponent from '../../components/DropDownComponent'


describe('DropDownComponent', () => {
  it('render Snapshot', () => {
    const { asFragment } = render(<DropDownComponent zoneList= {[
      {
        countryCode: 'AD',
        countryName: 'Andorra',
        zoneName: 'Europe/Andorra',
        gmtOffset: 3600,
        timestamp: 1614084530,
      },
      {
        countryCode: 'AL',
        countryName: 'Albania',
        zoneName: 'Europe/Albania',
        gmtOffset: 3600,
        timestamp: 1614084530,
      }
    ]}
    setZoneDetail={jest.fn()}
    />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('verify if element exists', () => {
    render(<DropDownComponent  zoneList= {[
        {
          countryCode: 'AD',
          countryName: 'Andorra',
          zoneName: 'Europe/Andorra',
          gmtOffset: 3600,
          timestamp: 1614084530,
        },
        {
          countryCode: 'AL',
          countryName: 'Albania',
          zoneName: 'Europe/Albania',
          gmtOffset: 3600,
          timestamp: 1614084530,
        }
      ]}
      setZoneDetail={jest.fn()}
     />)
    expect(screen.getByText('Andorra, Europe/Andorra')).toBeInTheDocument()
  })

  it('onchange set value', () => {
    render(<DropDownComponent  zoneList= {[
        {
          countryCode: 'AD',
          countryName: 'Andorra',
          zoneName: 'Europe/Andorra',
          gmtOffset: 3600,
          timestamp: 1614084530,
        },
        {
          countryCode: 'AL',
          countryName: 'Albania',
          zoneName: 'Europe/Albania',
          gmtOffset: 3600,
          timestamp: 1614084530,
        }
      ]}
      setZoneDetail={jest.fn()}
     />)
     fireEvent.change(screen.getByDisplayValue('Andorra, Europe/Andorra'), {
      target: { value: "Albania, Europe/Albania" },
    });
    expect(screen.getByDisplayValue('Albania, Europe/Albania')).toBeInTheDocument()
  })
})

