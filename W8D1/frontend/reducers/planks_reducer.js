import {
  RECEIVE_PLANKS
} from '../actions/plank_actions';

const planksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_PLANKS:
    return action.planks;
  default:
    return state;
  }
};

export default planksReducer;