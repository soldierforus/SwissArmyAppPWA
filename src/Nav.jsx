import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Router, Link } from '@reach/router'
import DadJoke from './DadJoke'
import Home from './Home'
import './Nav.css'

class Nav extends React.Component {
  showSettings = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <Menu>
          <Link to="/">Home</Link>
          <Link to="/DadJoke">Dad Joke</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/workoutTracker">Workout Tracker</Link>
        </Menu>
        <Router>
          <Home path="/" />
          <DadJoke path="DadJoke" />
          <DadJoke path="Weather" />
          <DadJoke path="WorkoutTracker" />
        </Router>
      </div>
    )
  }
}

export default Nav
