import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
