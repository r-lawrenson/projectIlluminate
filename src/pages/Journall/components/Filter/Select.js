import React  from 'react';
import { moods } from '../../api/data';
import './filter.css'

// Adds a select box, where the value isa smile, mapping through the moods listing them one by one
export const Select = ({ smile, setSmile }) => {
  return (
    <div>
      <select
        value={smile}
        onChange={setSmile}>
        <option value=""></option>
        {moods.map((smileItem, index) => (
          <option key={`smile-option_${index}`} value={smileItem}>
            {smileItem}
          </option>
        ))}
      </select>
      
    </div>
  );
};



