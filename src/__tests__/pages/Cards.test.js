import { render, screen } from '../../testUtils'
import Cards from '../../pages/Cards'

it('Cards matches snapshots', () => {
  const { asFragment } = render(<Cards />)
  expect(asFragment()).toMatchSnapshot()
})
