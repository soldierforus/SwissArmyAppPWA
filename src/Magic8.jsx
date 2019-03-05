import React, { Component } from 'react'
import './Magic8.css'

class Magic8 extends Component {
  state = {
    response: [],
  }

  ask = () => {
    const responses = [
      'How the hell should I know?',
      'Ask again later, a lot later',
      'You have a better chance of winning the Lottery...On your wedding day... from space',
      'Pigs have been known to fly...Oh...Wait.',
      'It seems plausible in the distant, distant future; Think millenia',
      'No, just no',
      'Definitely maybe!',
      'That seems highly unlikely, then again, so did a Trump presidency',
      'Go ask the internet',
      'Obsessed much?',
      'Indubitably',
      'If you will it, it is no dream',
      "Ask me no questions, and I'll tell you no lies",
    ]
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]
    this.setState({ response: randomResponse })
  }

  render() {
    // use line below to avoid destructuring lint error
    const { response } = this.state

    return (
      <div id="Magic8">
        <h1>Magic 8 Ball</h1>
        <button type="button" onClick={this.ask}>
          Ask Magic 8 ball
        </button>
        <p>{response}</p>
      </div>
    )
  }
}

export default Magic8
