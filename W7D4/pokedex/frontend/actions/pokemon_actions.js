import * as APIUtil from '../util/api_util'
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";


export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
})

export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
        .then(payload =>  {
            dispatch(receiveAllPokemon(payload))
        })
)

export const receiveSinglePokemon = payload => ({
    type: RECEIVE_SINGLE_POKEMON,
    payload
})

export const requestSinglePokemon = (id) => (dispatch) => (
    APIUtil.fetchSinglePokemon(id)
        .then(payload =>  {
            dispatch(receiveSinglePokemon(payload))
        })
)
