import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Buttons from './pages/Buttons'
import Dashboard from './pages/Dashboard'

import Home from './pages/Home'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/buttons" component={Buttons} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
