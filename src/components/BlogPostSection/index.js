import React from 'react'
import Section from '../Section'
import BlogPostUnit from '../BlogPostUnit'

class BlogPostSection extends React.Component {
  render() {
    return (
      <Section title="Blog Posts">
        <div className="column">
          <BlogPostUnit
            title='How Turtlemint uses Postman to help collaboration between remote teams'
            link='https://medium.com/turtlemint-engineering-blog/how-turtlemint-uses-postman-to-help-collaboration-between-remote-teams-7aa6e4501097'
            timeperiod='6 Jan 2020'
          />
          <BlogPostUnit
            title='Getting started with Dockerizing your Node.js Application'
            link='https://medium.com/hackernoon/getting-started-with-dockerizing-your-node-js-application-bab6b2451cde'
            timeperiod='15 Apr 2019'
          />
          <BlogPostUnit
            title='How To Reduce Development Time? Mock Your APIs'
            link='https://medium.com/hackernoon/how-to-reduce-development-time-mock-your-apis-f0c81072fad6'
            timeperiod='28 Nov 2018'
          />
          <BlogPostUnit
            title='Simple Jarvis using Android Things'
            link='https://android.jlelse.eu/simple-jarvis-using-android-things-1f56c91c8af0'
            timeperiod='19 Jan 2018'
          />
          <BlogPostUnit
            title='What will make you become a better Android developer?'
            link='https://android.jlelse.eu/beginners-guide-to-better-android-development-b6d17d09d8da'
            timeperiod='3 Nov 2017'
          />
          <BlogPostUnit
            title='My Advice to Beginner Developers'
            link='https://codeburst.io/how-i-got-to-where-i-am-279e4597d344'
            timeperiod='12 Oct 2017'
          />
        </div>
      </Section>
    )
  }
}

export default BlogPostSection
