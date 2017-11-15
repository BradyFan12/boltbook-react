import React from 'react';
import PropTypes from 'prop-types';
import './main.css';

export const Card = ({ children }) => {
  return (
    <div className='card'>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
}