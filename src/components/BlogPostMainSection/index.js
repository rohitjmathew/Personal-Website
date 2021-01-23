import React from 'react'
import Section from '../Section'
import BlogPostUnit from '../BlogPostUnit'


class BlogPostSection extends React.Component {
  render() {
    return (
      <Section title="Blog Posts">
        <div className="column">
          <BlogPostUnit
            title='JSON Web Token (JWT) and why we use them?'
            link='https://blog.rohitjmathew.space/json-web-token-jwt-and-why-we-use-them'
            timeperiod='16 Dec 2020'
          />
          <BlogPostUnit
            title='Lessons for Working Remotely: Thoughts From a Pandemic'
            link='https://blog.rohitjmathew.space/lessons-for-working-remotely-thoughts-from-a-pandemic-a3d6d1cedef6'
            timeperiod='17 Aug 2020'
          />
          <BlogPostUnit
            title='How Turtlemint uses Postman to help collaboration between remote teams'
            link='https://blog.rohitjmathew.space/how-turtlemint-uses-postman-to-help-collaboration-between-remote-teams-7aa6e4501097'
            timeperiod='6 Jan 2020'
          />
          <BlogPostUnit
            title='Getting started with Dockerizing your Node.js Application'
            link='https://blog.rohitjmathew.space/getting-started-with-dockerizing-your-node-js-application-bab6b2451cde'
            timeperiod='15 Apr 2019'
          />
          <BlogPostUnit
            title='Read More'
            link='https://blog.rohitjmathew.space/'
          />
        </div>
      </Section>
    )
  }
}

export default BlogPostSection
