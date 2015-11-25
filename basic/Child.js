import React, { Component, PropTypes } from 'react'

export default class Child extends Component {
  render() {
    const { params: { childId }} = this.props
    return (
      <div className="Child">
        <h2>Child</h2>
        <p>{childId}</p>
      </div>
    )
  }
}