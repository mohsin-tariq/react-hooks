import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Dashboard } from './pages/Dashboard'

import { Home } from './pages/Home'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
