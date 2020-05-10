import React, { useState, useEffect } from 'react';

import './styles.scss';
import { useSelector } from 'react-redux';
import MoveItem from './MoveItem';

export default function Moves() {
  const pokemon = useSelector(state => state.pokemon.data);

  return (
    <ul id="moves">
      {pokemon &&
        pokemon.movesDetails.map(move => (
          <MoveItem key={move.name} move={move} />
        ))}
    </ul>
  );
}
