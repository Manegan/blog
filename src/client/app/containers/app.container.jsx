'use babel'

import React from 'react'

import AwesomeComponent from '../components/awesome.component.jsx'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {likesCount : 0}
  }

  onLike() {
    let newLikesCount = this.state.likesCount+1
    this.setState({likesCount: newLikesCount})
  }

  render() {
    return (
      <AwesomeComponent
      onLike={this.onLike.bind(this)}
      likesCount={this.state.likesCount}/>
    )
  }
}

export default AppContainer
