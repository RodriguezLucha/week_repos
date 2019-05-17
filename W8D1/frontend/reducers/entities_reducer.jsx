// frontend/reducers/entities_reducer.jsx

import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import planksReducer from './planks_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  planks: planksReducer
});

export default entitiesReducer;