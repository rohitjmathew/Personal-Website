import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import turtlemintLogo from '../../assets/images/experience/turtlemint.webp'
import hackerrankLogo from '../../assets/images/experience/hackerrank.webp'
import auth0Logo from '../../assets/images/experience/auth0.webp'

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
            timeperiod='2018 - Current'
          />
          <ExperienceUnit
            logo={auth0Logo}
            colour='#FFFFFF'
            title='Auth0 Ambassador'
            link='https://auth0.com/ambassador-program'
            timeperiod='2020 - Current'
          />
          <ExperienceUnit
            logo={hackerrankLogo}
            colour='#FFFFFF'
            title='HackerRank'
            link='https://www.hackerrank.com/'
            timeperiod='2017'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
