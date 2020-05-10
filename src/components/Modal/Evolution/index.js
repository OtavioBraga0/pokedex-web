import React from 'react';

import './styles.scss';

import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import EvolveItem from './EvolveItem';

export default function Evolution({ color }) {
  const pokemon = useSelector(state => state.pokemon.data);

  return (
    <ul id="evolutions">
      <EvolveItem evolve={pokemon.evolutionChain.chain} color={color} />
    </ul>
  );
}

Evolution.propTypes = {
  color: PropTypes.string.isRequired,
};
