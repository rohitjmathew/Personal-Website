import React from 'react'
import Section from '../Section'
import TechTalkUnit from '../TechTalkUnit'

class TechTalkSection extends React.Component {
  render() {
    return (
      <Section title="Talks">
        <div className="column">
          <TechTalkUnit
            title='Dockerization'
            link='https://www.linkedin.com/posts/rohitjmathew_docker-deployment-microservices-activity-6592494174543667200-gekN'
            timeperiod='SRM University'
          />
        </div>
      </Section>
    )
  }
}

export default TechTalkSection
