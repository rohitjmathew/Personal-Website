import React, { Component } from 'react'

import './style.scss'

class BlogPostUnit extends Component {
  render() {
    return (
      <div className="experience-unit">
        <a href={this.props.link} target="_blank">
        <div className="title bold">
          {this.props.title}
        </div>
        </a>
        <div className="time-period">
          {this.props.timeperiod}
        </div>
        <div className="subtitle">
          {this.props.subtitle}
        </div>
      </div>
    )
  }
}

export default BlogPostUnit
