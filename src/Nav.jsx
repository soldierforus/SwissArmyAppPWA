import { slide as Menu } from 'react-burger-menu'
import { Router, Link } from '@reach/router'
import React from 'react'
import DadJoke from './DadJoke'
import Magic8 from './Magic8'
import Goals from './Goals'
import Home from './Home'
import Weather from './Weather'
import Workout from './Workout'

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
          <Link to="/weather">Weather</Link>
          <Link to="/dadJoke">Dad Joke</Link>
          <Link to="/magic8">Magic 8 Ball</Link>
          <Link to="/goals">Goals</Link>
          <Link to="/workout">Workout Tracker</Link>
          <img src="img/knife.gif" alt="Knife gif by Seth Eckert" className="sidebarImg" />
        </Menu>
        <Router>
          <Home path="/" />
          <Weather path="weather" />
          <DadJoke path="dadJoke" />
          <Magic8 path="magic8" />
          <Goals path="goals" />
          <Workout path="workout" />
        </Router>
      </div>
    )
  }
}

export default Nav
