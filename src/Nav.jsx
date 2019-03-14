import { slide as Menu } from 'react-burger-menu'
import { Router, Link } from '@reach/router'
import React from 'react'
import DadJoke from './DadJoke'
import Magic8 from './Magic8'
import Goals from './Goals'
import Home from './Home'
import Weather from './Weather'
import Workout from './Workout'
import sidebarImg from './img/knife.gif'

import './Nav.css'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  showSettings = event => {
    event.preventDefault()
  }

  closeMenu() {
    this.setState({
      menuOpen: false,
    })
  }

  render() {
    const { menuOpen } = this.state
    return (
      <div>
        {/* // eslint-disable-next-line react/destructuring-assignment */}
        <Menu isOpen={menuOpen}>
          <Link to="/" onClick={() => this.closeMenu()}>
            Home
          </Link>
          <Link to="/weather" onClick={() => this.closeMenu()}>
            Weather
          </Link>
          <Link to="/dadJoke" onClick={() => this.closeMenu()}>
            Dad Joke
          </Link>
          <Link to="/magic8" onClick={() => this.closeMenu()}>
            Magic 8 Ball
          </Link>
          <Link to="/goals" onClick={() => this.closeMenu()}>
            Goals
          </Link>
          <Link to="/workout" onClick={() => this.closeMenu()}>
            Workout Tracker
          </Link>
          <img src={sidebarImg} alt="Knife gif by Seth Eckert" className="sidebarImg" />
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
