import React from 'react'
import ExperienceSection from '../components/About-Me/ExperienceSection'
import About from '../components/About-Me/Sidebar/About'
import Links from '../components/About-Me/Sidebar/Links'

import './about-me.style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h2>
          Hi, I'm <span className="bold">Rohit Jacob Mathew</span>
        </h2>

        <h4>
          A full stack software engineer currently based in Mumbai, India. <br/><br/>

          I am passionate about building scalable and reliable products for users and am currently doing so at Turtlemint. <br/><br/>

          While my interests currently lie in the development of scalable backend solutions, DevOps and in smart AI based system, I'm excited by almost anything in tech.

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
