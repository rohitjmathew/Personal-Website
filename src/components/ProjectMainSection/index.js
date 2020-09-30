import React from 'react'
import Section from '../Section'
import ProjectUnit from '../ProjectUnit'

class ResearchPaperSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="column">
          <ProjectUnit
            title='Templater'
            link='https://github.com/apps/templater'
            timeperiod='A Probot application to enforce PR or Issue Templates.'
          />
          <ProjectUnit
            title='Manchester United Quiz'
            link='https://assistant.google.com/services/a/uid/0000006f43c77ac7'
            timeperiod='Google Assistant chatbot to test the user knowledge about Manchester United Football Club.'
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
