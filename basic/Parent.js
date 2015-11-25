import React, { Component, PropTypes } from 'react'

export default class Parent extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { params: { parentId }} = this.props
    return (
      <div className="Parent">
        <h2>Parent</h2>
        <p>{parentId}</p>
        {this.props.children}
      </div>
    )
  }
}