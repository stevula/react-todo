import React, { Component } from 'react';


const Filter = ({ filter, active, onClick }) => {
  return (
    <button
      className={active  ? 'active' : ''}
      onClick={(e => {
        e.preventDefault;
        onClick();
      })}>
      {filter}
    </button>
  );
}

export default Filter;
