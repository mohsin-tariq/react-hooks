import { render, screen } from '../../testUtils'
import Buttons from '../../pages/Buttons'

it('Buttons match snapshot', () => {
  const { asFragment } = render(<Buttons />)
  expect(asFragment()).toMatchSnapshot()
})


