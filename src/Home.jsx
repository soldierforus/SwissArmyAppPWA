import React from 'react'
import './Home.css'
import logo from './img/logo.png'

const Home = () => {
  return (
    <div id="Home">
      <h1>Swiss Army App</h1>
      <img alt="logo" src={logo} className="homeLogo" />
      <p>
        By <a href="https://tdbennett.com">Travis Bennett</a>
      </p>
    </div>
  )
}

export default Home
