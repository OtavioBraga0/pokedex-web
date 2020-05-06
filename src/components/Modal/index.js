import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

import * as PokemonActions from '../../store/modules/pokemon/actions';

import pikachu from '../../assets/pikachu.png';
import { colors } from '../../utils/utils';

export default function Modal({ id }) {
  const pokemon = useSelector(state => state.pokemon.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id !== 0) {
      dispatch(PokemonActions.getPokemonRequest(id));
    }
  }, [id, dispatch, pokemon]);

  return (
    <div
      id="modal-container"
      style={{
        background: pokemon ? colors[pokemon.types[0].type.name] : '#FFF',
      }}
    >
      {id === 0 || !pokemon ? (
        <div id="mensagem-vazia">
          <h2>Você ainda não selecionou nada!</h2>
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
          </div>
        </>
      )}
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.number.isRequired,
};
