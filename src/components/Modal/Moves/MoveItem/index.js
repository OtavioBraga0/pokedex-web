import React from 'react';

import './styles.scss';
import PropTypes from 'prop-types';

export default function MoveItem({ move }) {
  return (
    <li className="move-item">
      <div className="move-details">
        <span className="move-title">{move.name.replace('-', ' ')}</span>
        <span className="move-subtitle">{move.damage_class.name}</span>
      </div>
      <div className="move-type">
        <img
          src={`${process.env.PUBLIC_URL}/src/assets/types/${move.type.name}.svg`}
          alt={move.type.name}
        />
      </div>
    </li>
  );
}

MoveItem.propTypes = {
  move: PropTypes.shape().isRequired,
};
