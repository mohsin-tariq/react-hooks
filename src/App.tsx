import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './pages/Navbar'
import Buttons from './pages/Buttons'
import Cards from './pages/Cards'
import Home from './pages/Home'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/cards" component={Cards} />
          <Route path="/buttons" component={Buttons} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
