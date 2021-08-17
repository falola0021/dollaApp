import './App.css'

import Home from './pages'
import Signin from './pages/signin'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' exact component={Signin} />
      </Switch>
    </Router>
  )
}

export default App
