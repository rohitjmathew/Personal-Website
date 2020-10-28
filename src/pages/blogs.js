import React from 'react'
import BlogPostSection from '../components/BlogPageSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="blogs">
      <div className="main">
        <h2>
          Hi 👋🏽 I'm <span className="bold">Rohit Jacob Mathew</span>
        </h2>

        <br/>
        <BlogPostSection />

      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
