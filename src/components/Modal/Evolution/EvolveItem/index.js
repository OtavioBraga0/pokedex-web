import React from 'react';

import './styles.scss';

import PropTypes from 'prop-types';

import arrow from '../../../../assets/arrow.svg';

import { evolveItem } from '../../../../utils/utils';

export default function EvolveItem({ evolve, color }) {
  function evolutionTrigger(trigger) {
    const response = {};
    switch (trigger.trigger.name) {
      case 'level-up':
        if (trigger.time_of_day) {
          response.data = trigger.time_of_day;
        } else if (trigger.location) {
          response.data = `Location`;
        } else if (trigger.known_move_type) {
          response.data = trigger.known_move_type.name;
        } else {
          response.data = `Lv. ${trigger.min_level}`;
        }
        break;
      case 'use-item':
        response.data = evolveItem[`${trigger.item.name}`];
        break;
      case 'trade':
        response.data = 'Trade';
        break;
      default:
        break;
    }

    return response.data;
  }

  return (
    <>
      {evolve &&
        evolve.evolves_to.map(item => (
          <>
            <li key={evolve.species.name} className="evolve-item">
              <div className="evolve-image-container">
                <img
                  className="evolve-image"
                  src={`https://img.pokemondb.net/sprites/home/normal/${evolve.species.name}.png`}
                  alt={evolve.species.name}
                />
                <span className="evolve-name">{evolve.species.name}</span>
              </div>

              <div className="evolve-trigger">
                <span className="evolve-trigger-name" style={{ color }}>
                  {evolutionTrigger(item.evolution_details[0])}
                </span>
                <img src={arrow} alt="Evolution" />
              </div>
              <div className="evolve-image-container">
                <img
                  className="evolve-image"
                  src={`https://img.pokemondb.net/sprites/home/normal/${item.species.name}.png`}
                  alt={item.species.name}
                />
                <span className="evolve-name">{item.species.name}</span>
              </div>
            </li>
            {item.evolves_to && <EvolveItem evolve={item} color={color} />}
          </>
        ))}
    </>
  );
}

EvolveItem.propTypes = {
  evolve: PropTypes.shape().isRequired,
  color: PropTypes.string.isRequired,
};
