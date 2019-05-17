import { receiveAllPokemon } from "../actions/pokemon_actions";

export const fetchAllPokemon = () => (
    $.ajax({
        method: 'GET',
        url: '/api/pokemon'
    })
);

export const fetchSinglePokemon = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/pokemon/${id}`
    })
);