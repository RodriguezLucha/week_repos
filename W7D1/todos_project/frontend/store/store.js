import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducers';

export const configureStore = () => createStore(rootReducer);

