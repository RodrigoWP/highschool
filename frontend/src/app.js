import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import Student from 'containers/student'

injectGlobal`
  html,
  body {
    font-family: 'Open Sans Condensed', sans-serif;
  }
`

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Student} />
    </Switch>
  </Router>
)

export default App
