import { render, screen, fireEvent } from '../../../testUtils'
import { Timezone } from '../../../components'

describe('Timezone', () => {
  it('render Snapshot', () => {
    const { asFragment } = render(<Timezone />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('useCallback: check update State and render another props', () => {
    render(<Timezone />)
    expect(screen.getByText('Zone Name: Europe/Andorra')).toBeInTheDocument();
    fireEvent.change(screen.getByDisplayValue('Andorra, Europe/Andorra'), {
      target: { value: "Albania, Europe/Albania" },
    });
    expect(screen.getByText('Zone Name: Europe/Albania')).toBeInTheDocument();
  })

})

