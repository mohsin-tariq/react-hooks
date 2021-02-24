import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import App from '../../App'
import Navbar from '../../components/Navbar'
import { render, screen, fireEvent } from '../../testUtils'

describe('Routing', () => {
  test('route to Dashboard', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>
    )
    fireEvent.click(screen.getByText('Dashboard'))
    expect(screen.getByText('Dashboard Page')).toBeInTheDocument()
  })

  test('route to HomePage', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>
    )
    fireEvent.click(screen.getByText('Home'))
    expect(screen.getByText('Time Zone Component')).toBeInTheDocument()
  })

  test('render Snapshot', () => {
    const history = createMemoryHistory()
    const { asFragment } = render(
      <Router history={history}>
        <Navbar />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  
})
