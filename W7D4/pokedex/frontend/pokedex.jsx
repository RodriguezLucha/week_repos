import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon, requestSinglePokemon, RECEIVE_ALL_POKEMON } from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors'
import Root from './components/root'
import { HashRouter, Route } from 'react-router-dom';



document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootEl);
});

window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.requestSinglePokemon = requestSinglePokemon;
window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
window.selectAllPokemon = selectAllPokemon;