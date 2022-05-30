import React, { useContext } from 'react';
import { Select } from './Select';
import { Contex } from '../../Contex';
import './filter.css'

//Search posts by title or mood(smile)
const Filter = () => {
  const { smile, title, onTitle, onSmile } = useContext(Contex);
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search"
        value={title}
        onChange={onTitle}
      />
      <Select smile={smile} setSmile={onSmile}  />
    </div>
  );
};

export default Filter;
