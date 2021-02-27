import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Test from './pages/test'

const App = () => {

  return (
    <div>

    <Router>

    {/* top of page */}

    {/* main content */}

    <Switch>
      <Route exact path='/' render={props => (<Home />)} />
      <Route exact path='/test' render={props => (<Test />)} />
    </Switch>

    {/* bottom of page */}

    </Router>

    </div>
  )
}

export default App
