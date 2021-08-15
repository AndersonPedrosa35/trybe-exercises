import React, { Component } from 'react'

export default class UsersId extends Component {
  render() {
    const { match: { params: { userId } } } = this.props;
    return (
      <div>
        <h1>{ userId }</h1>
      </div>
    )
  }
}
