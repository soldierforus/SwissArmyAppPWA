import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Nav.css'

class Nav extends React.Component {
  showSettings = event => {
    event.preventDefault()
  }

  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a id="home" className="menu-item" href="/">
          Dad Joke
        </a>
        <a id="about" className="menu-item" href="/about">
          Weather
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Workout Tracker
        </a>
      </Menu>
    )
  }
}

export default Nav
