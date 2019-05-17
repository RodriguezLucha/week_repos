import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state={}, action) => {
    switch (action.type){
        case (RECEIVE_ALL_POKEMON):
            return action.pokemon;
        case (RECEIVE_SINGLE_POKEMON):
            let newState = state;
            newState[action.payload.pokemon.id] = action.payload.pokemon;
            return newState;
        default:
            return state;
    }
}

export default pokemonReducer;