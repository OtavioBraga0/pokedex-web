import React from 'react';

import PropTypes from 'prop-types';

import { MdSearch } from 'react-icons/md';

export default function SearchBar({ search, setSearch }) {
  return (
    <div>
      <MdSearch color="#4F4F4F" size={24} />
      <input type="text" value={search} onChange={setSearch} />
    </div>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};
