import React, { Component } from 'react'
import { mapStateToProps, connect } from 'react-redux';

class Tempo extends Component {
  render() {
    const { clima } = this.props
    return (
      <div>
        <h1>{ clima }</h1>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   clima: state.clima,
// })

export default Tempo;
