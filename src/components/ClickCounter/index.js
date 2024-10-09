import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main">
        <h1>The Button has been clicked {count} times</h1>
        <p>Click the button to increase the count</p>
        <button type="submit" onClick={this.onIncrement} className="button">
          click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
