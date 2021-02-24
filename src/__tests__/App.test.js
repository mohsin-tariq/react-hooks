import { render } from '../testUtils'

import App from '../App'

it('Renders the connected app with initialState', () => {
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot()
})
