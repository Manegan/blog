'use babel'

import React from 'react'
import {render} from 'react-dom'
import AppContainer from './containers/app.container.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <AppContainer/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))
