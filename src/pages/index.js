import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectSection from '../components/ProjectMainSection'
import ResearchPaperSection from '../components/ResearchPaperSection'
import TechTalkSection from '../components/TechTalkSection'
import BlogPostSection from '../components/BlogPostMainSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h2>
          Hi 👋🏽 I'm  <span className="bold">Rohit Jacob Mathew</span>
        </h2>

        <h4>
          A Senior Software Engineer from India<br/><br/>

          I am currently working on scaling and building a reliable product for agents to sell insurance at Turtlemint. I am also an Auth0 Ambassador and a former SDE Intern at HackerRank.<br/><br/>

          While my interests currently lie in the development of scalable solutions, DevOps, Developer Relations/Dev Evangelism as well as smart AI based system, I'm excited by almost anything in tech.

        </h4>

        <br/>
        <ExperienceSection />

        <br/>
        <ProjectSection />
    
        <br/>
        <BlogPostSection />

        <br/>
        <ResearchPaperSection />

        <br/>
        <TechTalkSection />

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
