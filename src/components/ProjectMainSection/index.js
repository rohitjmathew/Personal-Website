import React from 'react'
import Section from '../Section'
import ProjectUnit from '../ProjectUnit'

class ResearchPaperSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="column">
          <ProjectUnit
            title='Slack Notifier For Vaccine in India'
            link='https://github.com/rohitjmathew/vaccine-slack-notifier'
            timeperiod="Slack Notifier for India's 18+ Vaccine Appointment"
          />
          <ProjectUnit
            title='readme.so'
            link='https://readme.so'
            timeperiod='readme.so is a markdown editor with ready made templates to easily create a simple README for your repositories.'
          />
          <ProjectUnit
            title='Templater Bot'
            link='https://github.com/marketplace/templater'
            timeperiod='A Probot application to enforce PR or Issue Templates.'
          />
          <ProjectUnit
            title='Personal Website'
            link='https://github.com/rohitjmathew/Personal-Website'
            timeperiod='A minimalist portfolio website built using Gatsby.'
          />
          <ProjectUnit
            title='See More'
            link='/projects'
          />
        </div>
      </Section>
    )
  }
}

export default ResearchPaperSection
