'use babel'

import React from 'react'

class AwesomeComponent extends React.Component {
  render() {
    return (
      <div>
        Likes: <span>{this.props.likesCount}</span>
        <div><button onClick={this.props.onLike}>Like Me</button></div>
      </div>
    )
  }
}

export default AwesomeComponent
