import React from 'react';

import './styles.scss';

import PropTypes from 'prop-types';
import { FaEyeSlash } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function Ability({ ability, color }) {
  const pokemon = useSelector(state => state.pokemon.data);

  return (
    <li key={ability.name} className="ability">
      <span style={{ color }} className="subtitle">
        {ability.name}
        {ability.pokemon.map(pokemonAbility =>
          pokemonAbility.pokemon.name === pokemon.name &&
          pokemonAbility.is_hidden ? (
            <FaEyeSlash key={ability.name} color={color} size={16} />
          ) : null
        )}
      </span>
      <p className="ability-description">{ability.effect_entries[0].effect}</p>
    </li>
  );
}

Ability.propTypes = {
  ability: PropTypes.shape().isRequired,
  color: PropTypes.string.isRequired,
};
