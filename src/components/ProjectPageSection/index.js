import React from 'react'
import Section from '../Section'
import ProjectUnit from '../ProjectUnit'

class ResearchPaperSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="column">
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
            title='Slack Jenkins Bot'
            link='https://github.com/rohitjmathew/slack-jenkins-bot'
            timeperiod='A slack bot to trigger jenkins jobs and post status back to a slack channel. Made using hubot (GitHub).'
          />
          <ProjectUnit
            title='Hubot Jenkins Optimised Plugin'
            link='https://www.npmjs.com/package/hubot-jenkins-optimised'
            timeperiod='A custom Jenkins integration for Hubot with multiple server support.'
          />
          <ProjectUnit
            title='Hubot Slack Attachment Optimised Plugin'
            link='https://www.npmjs.com/package/hubot-slack-attachment-optimised'
            timeperiod='A Slack integration for Hubot which enables sending detailed messaged (by means of attachments) from Hubot to Slack.'
          />
          <ProjectUnit
            title='Hubot Jenkins notifier for Slack'
            link='https://www.npmjs.com/package/hubot-jenkins-slack-optimised'
            timeperiod='A custom Slack integration for Hubot which responds to Jenkins notifications in a format appropriate for Slack attachments.'
          />
        </div>
      </Section>
    )
  }
}

export default ResearchPaperSection
