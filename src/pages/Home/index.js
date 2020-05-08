import React, { useState, useEffect, useCallback } from 'react';

import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../../components/SearchBar';

import PokedexItem from '../../components/PokedexItem';

import * as PokedexAction from '../../store/modules/pokedex/actions';

import loadingImage from '../../assets/pokeball.svg';
import Modal from '../../components/Modal';

export default function Home() {
  const pokedex = useSelector(state => state.pokedex.data);
  const dispatch = useDispatch();

  const [pokemons, setPokemons] = useState([]);
  const [pokemonId, setPokemonId] = useState(0);

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(PokedexAction.getPokedexRequest());
  }, [dispatch]);

  useEffect(() => {
    if (pokedex) {
      const data = pokedex.pokemon_entries.filter(poke => {
        return poke.pokemon_species.name.indexOf(search.toLowerCase()) > -1;
      });

      setPokemons(data);
    }
  }, [search, pokedex]);

  function handleClick(id) {
    setPokemonId(id);
  }

  return (
    <div id="home-container">
      <div id="pokedex-container">
        <SearchBar search={search} setSearch={setSearch} />
        <ul id="pokedex">
          {pokemons &&
            pokemons.map(poke => (
              <PokedexItem
                key={poke.entry_number}
                pokemon={poke}
                handleClick={() => handleClick(poke.entry_number)}
              />
            ))}
        </ul>
        <div id="home-footer">
          {/* <button id="load-pokedex" type="button" onClick={handleLoad}>
          <img
            className={loading ? 'loading' : null}
            id="loading-image"
            src={loadingImage}
            alt="Loading Pokedex"
          />
        </button> */}
        </div>
      </div>
      <Modal id={pokemonId} setPokemonId={setPokemonId} />
    </div>
  );
}
