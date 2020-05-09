/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

import * as PokemonActions from '../../store/modules/pokemon/actions';

import pikachu from '../../assets/pikachu.png';
import { colorsGradient, colors, stats } from '../../utils/utils';
import Stat from './Stat';
import Loading from '../Loading';

export default function Modal({ id }) {
  const pokemon = useSelector(state => state.pokemon.data);
  const dispatch = useDispatch();

  const [colorGradient, setColorGradient] = useState('#FFF');
  const [color, setColor] = useState('#FFF');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id !== 0) {
      setLoading(true);
      setTimeout(() => {
        dispatch(PokemonActions.getPokemonRequest(id));
      }, 1000);
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (pokemon) {
      setColorGradient(colorsGradient[pokemon.types[0].type.name]);
      setColor(colors[pokemon.types[0].type.name]);

      if (id === pokemon.id) {
        setLoading(false);
      }
    }
  }, [pokemon]);

  return (
    <div
      id="modal-container"
      style={{
        background: colorGradient,
      }}
    >
      {id === 0 ? (
        <div id="mensagem-vazia">
          <h2>You haven't selected anything yet</h2>
          <img src={pikachu} alt="Pikachu" />
        </div>
      ) : loading ? (
        <Loading loading={loading} />
      ) : pokemon ? (
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
                  <Stat
                    pokemon={pokemon}
                    color={color}
                    colorGradient={colorGradient}
                    stats={stats}
                  />
                </div>
                <div className="tab" id="tab-2" />
                <div className="tab" id="tab-3" />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.number.isRequired,
};
