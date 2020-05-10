import React from 'react';

import './styles.scss';

import PropTypes from 'prop-types';

import { SectionSubtitle } from '../../../SectionTitle';

export default function Sprite({ color, name }) {
  return (
    <ul id="sprite">
      <li>
        <SectionSubtitle title="Normal" color={color} />
        <img
          className="sprite-image"
          src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
          alt={name}
        />
      </li>
      <li>
        <SectionSubtitle title="Shiny" color={color} />
        <img
          className="sprite-image"
          src={`https://img.pokemondb.net/sprites/home/shiny/${name}.png`}
          alt={name}
        />
      </li>
    </ul>
  );
}

Sprite.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
