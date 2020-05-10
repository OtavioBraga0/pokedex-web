import React from 'react';

import './styles.scss';

import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import EvolveItem from './EvolveItem';

export default function Evolution({ color }) {
  const pokemon = useSelector(state => state.pokemon.data);

  return (
    <ul id="evolutions">
      {pokemon.evolutionChain.chain.evolves_to.length !== 0 ? (
        <EvolveItem evolve={pokemon.evolutionChain.chain} color={color} />
      ) : (
        <>
          <h2 className="nothing-message">This pokemon has no evolution</h2>
        </>
      )}
    </ul>
  );
}

Evolution.propTypes = {
  color: PropTypes.string.isRequired,
};
