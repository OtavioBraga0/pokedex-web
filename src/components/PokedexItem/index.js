/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';

export default function PokedexItem({ pokemon, handleClick }) {
  return (
    <li className="come-in" id="pokedex-item" onClick={handleClick}>
      <div id="pokemon-image">
        <img
          src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.pokemon_species.name}.png`}
          alt={pokemon.pokemon_species.name}
        />
      </div>
      <div id="pokedex-detail">
        <span>#{pokemon.entry_number}</span>
        <strong>{pokemon.pokemon_species.name}</strong>
      </div>
    </li>
  );
}

PokedexItem.propTypes = {
  pokemon: PropTypes.shape({
    entry_number: PropTypes.number,
    pokemon_species: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};
