import React, { useState, useEffect } from 'react';

import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../../components/SearchBar';

import PokedexItem from '../../components/PokedexItem';

import * as PokedexAction from '../../store/modules/pokedex/actions';

import Modal from '../../components/Modal';
import Loading from '../../components/Loading';

export default function Home() {
  const pokedex = useSelector(state => state.pokedex.data);
  const dispatch = useDispatch();

  const [pokemons, setPokemons] = useState([]);
  const [prevPokemons, setPrevPokemons] = useState([]);
  const [pokemonId, setPokemonId] = useState(0);

  const [offset, setOffset] = useState(33);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  async function handleLoad() {
    if (pokedex) {
      setLoading(true);
      const data = await pokedex.filter(poke => poke.id <= offset);
      setPokemons(data);
      setPrevPokemons(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    dispatch(PokedexAction.getPokedexRequest());
  }, [dispatch]);

  useEffect(() => {
    if (pokemons.length !== 151 && pokedex) {
      handleLoad();
    }
  }, [pokedex, offset]);

  function handleScroll() {
    const pokedexContainer = document.getElementById('pokedex-container');
    pokedexContainer.addEventListener('scroll', () => {
      if (
        pokedexContainer.scrollTop + pokedexContainer.clientHeight >=
        pokedexContainer.scrollHeight
      ) {
        setOffset(value => value + 18);
      }
    });
  }

  useEffect(() => {
    if (search === '') {
      handleScroll();
    }
  }, [search]);

  function handleClick(id) {
    setPokemonId(id);
  }

  function handleSearchChange(value) {
    const data = prevPokemons.filter(poke => {
      return poke.name.indexOf(value.toLowerCase()) > -1;
    });

    setPokemons(data);
    setSearch(value);
  }

  return (
    <div id="home-container">
      <div id="pokedex-container">
        {!loading ? (
          <>
            <SearchBar search={search} setSearch={handleSearchChange} />
            <ul id="pokedex">
              {pokemons.map(poke => (
                <PokedexItem
                  key={poke.id}
                  pokemon={poke}
                  handleClick={() => handleClick(poke.id)}
                />
              ))}
            </ul>
          </>
        ) : (
          <Loading loading={loading} />
        )}
      </div>
      <Modal id={pokemonId} setPokemonId={setPokemonId} />
    </div>
  );
}
