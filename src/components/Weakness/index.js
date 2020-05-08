import React from 'react';

import './styles.scss';

import PropTypes from 'prop-types';

export default function Weakness({ weakness, force }) {
  return (
    <li className="weakness">
      <img
        src={`${process.env.PUBLIC_URL}/src/assets/types/${weakness.name}.svg`}
        alt={weakness.name}
      />
      <span>{force}</span>
    </li>
  );
}

Weakness.propTypes = {
  weakness: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  force: PropTypes.string.isRequired,
};
