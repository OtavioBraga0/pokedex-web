import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

import * as PokemonActions from '../../store/modules/pokemon/actions';

import pikachu from '../../assets/pikachu.png';
import { colorsGradient, colors, stats } from '../../utils/utils';
import Weakness from '../Weakness';

export default function Modal({ id }) {
  const pokemon = useSelector(state => state.pokemon.data);
  const weaknesses = useSelector(state => state.pokemon.weaknesses);
  const dispatch = useDispatch();

  const [colorGradient, setColorGradient] = useState('#FFF');
  const [color, setColor] = useState('#FFF');

  useEffect(() => {
    if (id !== 0) {
      dispatch(PokemonActions.getPokemonRequest(id));

      if (pokemon) {
        setColorGradient(colorsGradient[pokemon.types[0].type.name]);
        setColor(colors[pokemon.types[0].type.name]);
        dispatch(
          PokemonActions.getWeaknessesRequest(pokemon.types[0].type.name)
        );
      }
    }
  }, [id, dispatch, pokemon, weaknesses]);

  function loadWeaknesses(data, force) {
    const weaknessItem = data.map(item => (
      <Weakness key={item.name} weakness={item} force={force} />
    ));

    return weaknessItem;
  }

  return (
    <div
      id="modal-container"
      style={{
        background: colorGradient,
      }}
    >
      {id === 0 || !pokemon ? (
        <div id="mensagem-vazia">
          <h2>You haven't selected anything yet</h2>
          <img src={pikachu} alt="Pikachu" />
        </div>
      ) : (
        <>
          <div id="modal-header" />
          <div id="modal-body">
            <img
              src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
              id="pokemon-image"
              alt={pokemon.name}
            />
            <div id="pokemon-details">
              <h1>{pokemon.name}</h1>
              <ul id="pokemon-types">
                {pokemon.types.map(type => (
                  <li key={type.type.name}>
                    <img
                      src={`${process.env.PUBLIC_URL}/src/assets/tags/${type.type.name}.png`}
                      alt={type.type.name}
                    />
                  </li>
                ))}
              </ul>
              <div id="pokemon-tabs">
                <ul id="tabs">
                  <li className="active">Stats</li>
                  <li>Evolutions</li>
                  <li>Moves</li>
                </ul>
                <div className="tab" id="tab-1">
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
                    {weaknesses &&
                      loadWeaknesses(
                        weaknesses.damage_relations.double_damage_to,
                        '2X'
                      )}
                    {weaknesses &&
                      loadWeaknesses(
                        weaknesses.damage_relations.half_damage_to,
                        '1/2X'
                      )}
                    {weaknesses &&
                      loadWeaknesses(
                        weaknesses.damage_relations.no_damage_to,
                        '0X'
                      )}
                  </ul>
                  <div className="section-title">
                    <span style={{ color }}>Abilities</span>
                  </div>
                  <ul id="abilities">
                    {pokemon &&
                      pokemon.abilities.map(item => (
                        <li
                          style={{ color }}
                          key={item.ability.name}
                          className="ability"
                        >
                          {item.ability.name}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="tab" id="tab-2" />
                <div className="tab" id="tab-3" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.number.isRequired,
};
