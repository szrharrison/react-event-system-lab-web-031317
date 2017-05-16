import React from 'react'

class Keypad extends React.Component {
  constructor() {
    super()
  }

  logText() {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.logText} />
      )
  }
}

export default Keypad
