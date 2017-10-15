import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {StyleRoot} from 'radium'

import About from '../about'
import Profiles from '../profiles'

const style = {
  padding: 10,
  maxWidth: 1240,
  margin: '0 auto'
}

const App = () => (
  <StyleRoot>
    <div style={style}>
      <Route path="/:employee" component={Profiles} />
      <About />
    </div>
  </StyleRoot>
)

export default App
