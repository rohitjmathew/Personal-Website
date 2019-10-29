import React from 'react'
import Section from '../Section'
import ResearchPaperUnit from '../ResearchPaperUnit'

class ResearchPaperSection extends React.Component {
  render() {
    return (
      <Section title="Research Papers">
        <div className="column">
          <ResearchPaperUnit
            title='Survey of Deep Learning Based Entertainment Oriented Recommendation Systems'
            link='http://ijcsit.com/docs/Volume%2010/vol10issue04/ijcsit2019100401.pdf'
            timeperiod='2019'
          />
          <ResearchPaperUnit
            title='Predictive analysis using Big data Analytics for Sensors used in Fleet Truck Monitoring System'
            link='http://www.enggjournals.com/ijet/docs/IJET16-08-02-308.pdf'
            timeperiod='2016'
          />
          <ResearchPaperUnit
            title='Survey On Data Mining Algorithm'
            link='http://www.ijcsit.com/docs/Volume%207/vol7issue1/ijcsit2016070166.pdf'
            timeperiod='2016'
          />
        </div>
      </Section>
    )
  }
}

export default ResearchPaperSection
