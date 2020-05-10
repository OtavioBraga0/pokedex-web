import React from 'react';

import './styles.scss';
import PropTypes from 'prop-types';

import Weakness from './Weakness';
import Breending from './Breending';
import Ability from './Ability';
import Capture from './Capture';
import Sprite from './Sprite';

import SectionTitle from '../../SectionTitle';

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
      <SectionTitle title="Weaknesses" color={color} />
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
      <SectionTitle title="Abilities" color={color} />
      <ul id="abilities">
        {pokemon &&
          pokemon.abilitiesDetails.map(item => (
            <Ability
              key={item.name}
              ability={item}
              pokemon={pokemon}
              color={color}
            />
          ))}
      </ul>
      <SectionTitle title="Breending" color={color} />
      <Breending pokemon={pokemon} color={color} />

      <SectionTitle title="Capture" color={color} />
      <Capture pokemon={pokemon} color={color} />

      <SectionTitle title="Sprites" color={color} />
      <Sprite name={pokemon.name} color={color} />
    </>
  );
}

Stat.propTypes = {
  pokemon: PropTypes.shape().isRequired,
  color: PropTypes.string.isRequired,
  colorGradient: PropTypes.string.isRequired,
  stats: PropTypes.shape().isRequired,
};
