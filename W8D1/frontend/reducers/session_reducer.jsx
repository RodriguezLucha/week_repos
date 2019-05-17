import {
  LOGOUT_CURRENT_USER,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

import merge from 'lodash/merge';


const _nullUser = Object.freeze({id: null});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return {id: action.user.id};
  case LOGOUT_CURRENT_USER:
    return _nullUser;
  default:
    return state;
  }
};

export default sessionReducer;