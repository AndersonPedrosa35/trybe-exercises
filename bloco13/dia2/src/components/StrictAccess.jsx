import React, { Component } from 'react'
import { Redirect } from 'react-router';

export default class StrictAccess extends Component {
  render() {
    const { user } = this.props;
    return (
      { Object.keys(user) === 'joao' ? (<h1>Welcome Joâo</h1>) : <Redirect to="/Users" /> }
      <div>
        
      </div>
    )
  }
}
