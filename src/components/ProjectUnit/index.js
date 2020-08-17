import React, { Component } from 'react'

import './style.scss'

class ProjectUnit extends Component {
  render() {
    return (
      <div className="experience-unit">
        <a href={this.props.link}>
        <div className="title bold">
          {this.props.title}
        </div>
        </a>
        <div className="time-period">
          {this.props.timeperiod}
        </div>
      </div>
    )
  }
}

export default ProjectUnit
