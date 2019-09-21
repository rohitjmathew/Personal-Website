import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          <h1>Rohit Jacob Mathew</h1>
          <h2>SDE at Turtlemint & Former Interns at HackerRank</h2>
          <a href="/about-me">About</a> | <a href="/blog">Blog</a>
        </div>
      </div>
    )
  }
}

export default About