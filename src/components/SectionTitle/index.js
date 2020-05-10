import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';

export default function SectionTitle({ title, color }) {
  return (
    <div className="section-title">
      <span style={{ color }}>{title}</span>
    </div>
  );
}

export function SectionSubtitle({ title, color }) {
  return (
    <p style={{ color }} className="subtitle">
      {title}
    </p>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

SectionSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
