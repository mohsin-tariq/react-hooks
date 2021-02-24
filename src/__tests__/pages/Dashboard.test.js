import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import App from '../../App'
import Dashboard from '../../pages/Dashboard'
import { render, screen, fireEvent } from '../../testUtils'

describe('Routing', () => {
  test('route to Dashboard and go back to Home Page', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>
    )
    fireEvent.click(screen.getByText('Dashboard'))
    expect(screen.getByText('Dashboard Page')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Go back'))
    expect(screen.getByText('Time Zone Component')).toBeInTheDocument()
  })

  test('route to HomePage', () => {
    const history = createMemoryHistory()
    const { asFragment } = render(
      <Router history={history}>
        <Dashboard />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  
})
