import React from 'react';

class Users extends React.Component {
  render() {
    const { greetingMessage, match: { params } } = this.props;
    return (
      <div>
        <h2> Users </h2>
        <p> {greetingMessage} usuário {params.UserId}, this is my awesome Users component </p>
      </div>
    );
  }
}

export default Users;