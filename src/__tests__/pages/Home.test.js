import { render, screen } from '../../testUtils'
import Home from '../../pages/Home'

it('Matches snapshots, Home Components with recieved data', () => {
  const { asFragment } = render(<Home />)
  expect(asFragment()).toMatchSnapshot()
  expect(screen.getByText('Time Zone Component')).toBeInTheDocument()
})


