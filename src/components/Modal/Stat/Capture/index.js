import React, { useState, useEffect } from 'react';

import './styles.scss';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import captureRateIcon from '../../../../assets/capture-rate.svg';

import { SectionSubtitle } from '../../../SectionTitle';

export default function Capture({ color }) {
  const pokemon = useSelector(state => state.pokemon.data);

  const [captureRate, setCaptureRate] = useState(0);
  const [generationCount, setGenerationCount] = useState(0);

  useEffect(() => {
    const rate = (pokemon.pokemonSpeciesDetails.capture_rate * 100) / 255;
    setCaptureRate(rate.toFixed(1));

    const generation = pokemon.pokemonSpeciesDetails.generation.name;
    const count = generation.split('-')[1].length;
    setGenerationCount(count);
  }, [pokemon]);

  return (
    <ul id="capture">
      <li id="habitat">
        <SectionSubtitle title="Habitat" color={color} />
        <p className="capture-habitat">
          {pokemon.pokemonSpeciesDetails.habitat.name}
        </p>
      </li>
      <li id="generation">
        <SectionSubtitle title="Generation" color={color} />

        <p className="capture-generation">Generation {generationCount}</p>
      </li>
      <li id="rate">
        <SectionSubtitle title="Capture Rate" color={color} />

        <div id="capture-rate">
          <div id="capture-rate-percentage">
            <p style={{ color }}>{captureRate}%</p>
          </div>
          <div id="capture-rate-graph">
            <CircularProgressbarWithChildren
              value={captureRate}
              styles={{
                root: { width: '100%' },
                path: { stroke: color },
              }}
            >
              <img src={captureRateIcon} alt="Capture Rate Graph" />
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </li>
    </ul>
  );
}

Capture.propTypes = {
  color: PropTypes.string.isRequired,
};
