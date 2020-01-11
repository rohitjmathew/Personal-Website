import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
        <li className="icon">
            <a href="https://www.linkedin.com/in/rohitjmathew/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://github.com/rohitjmathew" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://medium.com/@rohitjmathew" target="_blank">
              <i className="fa fa-medium"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:rohitjmathew@outlook.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://scholar.google.co.in/citations?user=7moht3YAAAAJ&hl=en" target="_blank">
              <i className="fa fa-graduation-cap"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://tinyletter.com/teamix" target="_blank">
              <i className="fa fa-rss"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://open.spotify.com/user/21loszaq56ntdqmategugxofa?si=56YIorANSaeliPYWb5ulUQ" target="_blank">
              <i className="fa fa-spotify"></i>
            </a>
          </li>
        </ul>
        <div className="small">
          Built with ❤️ using <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a>
        </div>
      </div>
    )
  }
}

export default Links