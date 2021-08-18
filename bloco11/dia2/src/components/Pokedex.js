import React from 'react';
import PropTypes from 'prop-types';
import '../posicao.css';

class Pokedex extends React.Component {
  render() {
    const { name, type, image } = this.props.user;
    return (
      <section className='container'>
        <p>{ name }</p>
        <p>{ type }</p>
        <img src={ image } alt={ name } />
      </section>
    )
  }
}

Pokedex.propTypes = {
  name: PropTypes.string.isRequired,
  types: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,

}

export default Pokedex;