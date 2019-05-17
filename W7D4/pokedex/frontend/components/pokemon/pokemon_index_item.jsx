import React from 'react';
import { Link } from 'react-router-dom';


export const PokemonIndexItem = (prop) => {

    return (
        <Link to={`/pokemon/${prop.pokemon.id}`}>
            <li className="pokemon-li" key={prop.pokemon.id}>
                <img className="pokemon-image" src={prop.pokemon.image_url} alt={prop.pokemon.name} width="42" height="42"></img>
                <div className="pokemon-name">{prop.pokemon.name}</div>
            </li>
        </Link>
    )
}