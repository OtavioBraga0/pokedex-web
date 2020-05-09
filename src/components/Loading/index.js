import React from 'react';

import PropTypes from 'prop-types';

import loadingImage from '../../assets/pokeball.svg';

import './styles.scss';

export default function Loading({ loading }) {
  return (
    <div className="loading">
      <img
        className={loading ? 'loading' : null}
        id="loading-image"
        src={loadingImage}
        alt="Loading Pokedex"
      />
    </div>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};
