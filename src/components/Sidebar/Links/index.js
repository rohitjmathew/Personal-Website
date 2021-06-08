import React, { Component } from 'react'

import './style.scss'
import '@fortawesome/fontawesome-free/css/all.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
        <li className="icon">
            <a href="https://www.linkedin.com/in/rohitjmathew/" target="_blank">
              <i className="fab fa-linkedin fa-lg" title="rohitjmathew's LinkedIn Profile"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://twitter.com/iamrohitjmathew" target="_blank">
              <i className="fab fa-twitter fa-lg" title="rohitjmathew's Twitter Profile"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://github.com/rohitjmathew" target="_blank">
              <i className="fab fa-github fa-lg" title="rohitjmathew's GitHub Profile"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://medium.com/@rohitjmathew" target="_blank">
              <i className="fab fa-medium-m fa-lg" title="rohitjmathew's Medium Profile"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://dev.to/rohitjmathew" target="_blank">
              <i className="fab fa-dev fa-lg" title="rohitjmathew's DEV Profile"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:rohitjmathew+website@outlook.com" target="_blank">
              <i className="fas fa-envelope fa-lg" title="rohitjmathew's Email ID"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://scholar.google.co.in/citations?user=7moht3YAAAAJ&hl=en" target="_blank">
              <i className="fas fa-graduation-cap fa-lg" title="rohitjmathew's Google Scholar Profile"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://tinyletter.com/teamix" target="_blank">
              <i className="fas fa-rss fa-lg" title="rohitjmathew's Music Newsletter"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://open.spotify.com/user/21loszaq56ntdqmategugxofa?si=56YIorANSaeliPYWb5ulUQ" target="_blank">
              <i className="fab fa-spotify fa-lg" title="rohitjmathew's Spotify Profile"></i>
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
