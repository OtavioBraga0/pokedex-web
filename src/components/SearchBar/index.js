import React from 'react';

import PropTypes from 'prop-types';

import { MdSearch, MdClear } from 'react-icons/md';

import './styles.scss';

export default function SearchBar({ search, setSearch }) {
  function handleClearSearch() {
    setSearch('');
  }

  return (
    <div id="search-container">
      <MdSearch color="#4F4F4F" size={24} />
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <MdClear
        color="#4F4F4F"
        size={20}
        onClick={() => (search ? handleClearSearch() : null)}
        className={`${search ? null : 'hidden'}`}
      />
    </div>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};
