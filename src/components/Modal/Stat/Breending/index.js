import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import genderIcon from '../../../../assets/gender.svg';

import { SectionSubtitle } from '../../../SectionTitle';

import './styles.scss';

export default function Breending({ color }) {
  const pokemon = useSelector(state => state.pokemon.data);

  const [female, setFemale] = useState(0);

  useEffect(() => {
    const femaleRate = (pokemon.pokemonSpeciesDetails.gender_rate * 100) / 8;
    setFemale(femaleRate);
  }, [pokemon]);

  return (
    <ul id="breending">
      <li id="egg">
        <SectionSubtitle title="Egg Group" color={color} />
        {pokemon &&
          pokemon.pokemonSpeciesDetails.egg_groups.map(item => (
            <p key={item.name} className="breending-eggs">
              {item.name}
            </p>
          ))}
      </li>
      <li id="hatch">
        <p style={{ color }} className="subtitle">
          Hatch Time
        </p>
        <p className="breending-hatch">
          {pokemon.pokemonSpeciesDetails.hatch_counter} Cycles
        </p>
      </li>
      <li id="gender">
        <p style={{ color }} className="subtitle">
          Gender
        </p>
        <div id="breending-gender">
          <div id="gender-percentage">
            <p id="female">{female}%</p>
            <p id="male">{100 - female}%</p>
          </div>
          <div id="gender-graph">
            <CircularProgressbarWithChildren
              value={female}
              styles={{
                root: { width: '100%' },
              }}
            >
              <img src={genderIcon} alt="Gender Graph" />
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </li>
    </ul>
  );
}

Breending.propTypes = {
  pokemon: PropTypes.shape().isRequired,
  color: PropTypes.string.isRequired,
};
