import React, { Component } from 'react'
import fetch from 'node-fetch'
import './DadJoke.css'

class DadJoke extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree. Setting the value of result.data to the property data on that object litral being passed as the first property to setState
  componentDidMount() {
    // https://icanhazdadjoke.com/api
    const url = 'https://icanhazdadjoke.com/'

    // https://github.com/bitinn/node-fetch#fetchurl-options
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'saa-dadjokes',
      },
    })
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.joke,
        })
      })
  }

  render() {
    const { data } = this.state

    return (
      <div id="DadJoke">
        <h1>Dad Joke</h1>
        <p>Joke: {data}</p>
      </div>
    )
  }
}
export default DadJoke
