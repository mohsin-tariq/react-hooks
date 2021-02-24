import { render, screen, fireEvent } from '../../testUtils'
import TimeZone from '../../components/Timezone'

describe('Timezone', () => {
  it('render Snapshot', () => {
    const { asFragment } = render(<TimeZone />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('useCallback: check update State and render another props', () => {
    render(<TimeZone />)
    expect(screen.getByText('Zone Name: Europe/Andorra')).toBeInTheDocument();
    fireEvent.change(screen.getByDisplayValue('Andorra, Europe/Andorra'), {
      target: { value: "Albania, Europe/Albania" },
    });
    expect(screen.getByText('Zone Name: Europe/Albania')).toBeInTheDocument();
  })

})

