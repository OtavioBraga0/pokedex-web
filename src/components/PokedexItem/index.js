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
          src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
          alt={pokemon.name}
        />
        <div id="pokemon-types">
          {pokemon.types.map(item => (
            <img
              key={item.type.name}
              className="type-icon"
              src={`${process.env.PUBLIC_URL}/src/assets/types/${item.type.name}.svg`}
              alt={item.type.name}
            />
          ))}
        </div>
      </div>
      <div id="pokedex-detail">
        <span>#{pokemon.id}</span>
        <strong>{pokemon.name}</strong>
      </div>
    </li>
  );
}

PokedexItem.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.array,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};
