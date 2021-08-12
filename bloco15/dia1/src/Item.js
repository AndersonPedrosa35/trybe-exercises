import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, onDoubleClick } = props;
  return (
    <li data-testid="li" onDoubleClick={ (e) => onDoubleClick(e) }>
      { content }
    </li>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
