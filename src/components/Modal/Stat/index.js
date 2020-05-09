import React from 'react';

import './styles.scss';
import PropTypes from 'prop-types';

import { FaEyeSlash } from 'react-icons/fa';

import Weakness from './Weakness';
import Breeding from './Breending';

export default function Stat({ pokemon, color, colorGradient, stats }) {
  function loadWeaknesses(data, force) {
    const weaknessItem = data.map(item => (
      <Weakness key={item.name} weakness={item} force={force} />
    ));
    return weaknessItem;
  }

  return (
    <>
      <ul id="stats">
        {pokemon.stats.map(stat => (
          <li key={stat.stat.name}>
            <div className="stat-title" style={{ color }}>
              {stats[`${stat.stat.name}`]}
            </div>
            <div className="stat-value">{stat.base_stat}</div>
            <div className="stat-bar">
              <div
                className="stat-progress"
                style={{
                  width: `${(100 * stat.base_stat) / 250}%`,
                  background: colorGradient,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="section-title">
        <span style={{ color }}>Weaknesses</span>
      </div>
      <ul id="weaknesses">
        {pokemon &&
          loadWeaknesses(
            pokemon.typesDetails[0].damage_relations.double_damage_to,
            '2X'
          )}
        {pokemon &&
          loadWeaknesses(
            pokemon.typesDetails[0].damage_relations.half_damage_to,
            '1/2X'
          )}
        {pokemon &&
          loadWeaknesses(
            pokemon.typesDetails[0].damage_relations.no_damage_to,
            '0X'
          )}
      </ul>
      <div className="section-title">
        <span style={{ color }}>Abilities</span>
      </div>
      <ul id="abilities">
        {pokemon &&
          pokemon.abilitiesDetails.map(item => (
            <li key={item.name} className="ability">
              <span style={{ color }} className="subtitle">
                {item.name}
                {item.pokemon.map(pokemonAbility =>
                  pokemonAbility.pokemon.name === pokemon.name &&
                  pokemonAbility.is_hidden ? (
                    <FaEyeSlash key={item.name} color={color} size={16} />
                  ) : null
                )}
              </span>
              <p className="ability-description">
                {item.effect_entries[0].effect}
              </p>
            </li>
          ))}
      </ul>
      <div className="section-title">
        <span style={{ color }}>Breeding</span>
      </div>
      <Breeding pokemon={pokemon} color={color} />
    </>
  );
}

Stat.propTypes = {
  pokemon: PropTypes.shape().isRequired,
  color: PropTypes.string.isRequired,
  colorGradient: PropTypes.string.isRequired,
  stats: PropTypes.shape().isRequired,
};
