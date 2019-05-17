import * as APIUtil from '../util/plank_api_util';

export const RECEIVE_PLANKS = 'RECEIVE_PLANKS';
export const RECEIVE_PLANK = 'RECEIVE_PLANK';

export const receivePlanks = planks => ({
  type: RECEIVE_PLANKS,
  planks,
});

export const receivePlank = ({plank}) => ({
  type: RECEIVE_PLANK,
  plank
});

export const fetchPlanks = () => dispatch => (
  APIUtil.fetchPlanks().then(planks => (
    dispatch(receivePlanks(planks))
  ))
);

export const createPlank = plank => dispatch => (
  APIUtil.createPlank(plank).then(plank => (
    dispatch(receivePlank(plank))
  ))
);