import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h2>
          Hi, I'm <span className="bold">Rohit Mathew</span>
        </h2>

        <h4>
          Full stack software engineer currently based in Mumbai, India. <br/><br/>

          I am passionate about building scalable and reliable products for users and am currently doing so at Turtlemint. <br/><br/>

          While my interests lie in development of backend solutions, scalable applications and in smart AI based system, I'm excited by almost anything in tech.

        </h4>

        <br/><br/>
        <ExperienceSection />
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
