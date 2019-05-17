import React from 'react';
import PlankMap from './plank_map';
import PlankIndex from './plank_index';

export const Search = ({fetchPlanks, planks}) => (
  <div>
    <PlankMap planks={planks}/>
    <PlankIndex fetchPlanks={fetchPlanks} planks={planks}/>
  </div>
);

export default Search;
