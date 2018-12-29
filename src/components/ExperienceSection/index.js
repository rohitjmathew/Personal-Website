import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import turtlemintLogo from '../../assets/images/experience/turtlemint.png'
import hackerrankLogo from '../../assets/images/experience/hackerrank.png'
import lexLogo from '../../assets/images/experience/lex.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={turtlemintLogo}
            colour='#FFFFFF'
            title='Turtlemint'
            link='https://www.turtlemint.com/'
            timeperiod='Current'
          />
          <ExperienceUnit
            logo={hackerrankLogo}
            colour='#FFFFFF'
            title='HackerRank'
            link='https://www.hackerrank.com/'
            timeperiod='2017'
          />
          <ExperienceUnit
            logo={lexLogo}
            colour='#FFFFFF'
            title='Logilinks'
            link='https://www.logilinkscs.com/'
            timeperiod='2016'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
