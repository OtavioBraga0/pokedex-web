/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import * as PokemonActions from '../../store/modules/pokemon/actions';

import pikachu from '../../assets/pikachu.png';
import { colorsGradient, colors, stats } from '../../utils/utils';
import Stat from './Stat';
import Loading from '../Loading';
import Evolution from './Evolution';

export default function Modal({ id }) {
  const pokemon = useSelector(state => state.pokemon.data);
  const dispatch = useDispatch();

  const [colorGradient, setColorGradient] = useState('#FFF');
  const [color, setColor] = useState('#FFF');

  const [loading, setLoading] = useState(false);

  const [tabIndex, setTabIndex] = useState(0);

  const active = { color: '#FFFFFF', background: colorGradient };
  const disable = { color, background: '#FFF' };

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

      console.log(pokemon);

      if (id === pokemon.id) {
        setLoading(false);
      }
    }
  }, [pokemon, id]);

  function handleChangeTab(index) {
    setTabIndex(index);
  }

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
              <Tabs
                id="pokemon-tabs"
                defaultIndex={tabIndex}
                onSelect={index => handleChangeTab(index)}
              >
                <TabList id="tabs">
                  <Tab style={tabIndex === 0 ? active : disable}>Stats</Tab>
                  <Tab style={tabIndex === 1 ? active : disable}>
                    Evolutions
                  </Tab>
                  <Tab style={tabIndex === 2 ? active : disable}>Moves</Tab>
                </TabList>

                <TabPanel>
                  <Stat
                    pokemon={pokemon}
                    color={color}
                    colorGradient={colorGradient}
                    stats={stats}
                  />
                </TabPanel>
                <TabPanel>
                  <Evolution pokemon={pokemon} color={color} />
                </TabPanel>
                <TabPanel>
                  <h2>Any content 3</h2>
                </TabPanel>
              </Tabs>
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
