import React from 'react';
import PropTypes from 'prop-types';
class UserProfile extends React.Component {
  render() {
    const { user: {name, email, avatar} } = this.props;
    
    return (
      <section>
        <p>{ name }</p>
        <p>{ email }</p>
        <img src={ avatar } alt={ name } />
      </section>
    )
  }
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
}

export default UserProfile