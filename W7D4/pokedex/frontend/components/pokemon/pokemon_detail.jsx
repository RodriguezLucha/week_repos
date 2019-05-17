import React from 'react';


class PokemonDetail extends React.Component {

    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.pokemonId !== this.props.match.params.pokemonId){
            this.props.requestSinglePokemon(this.props.match.params.pokemonId)
        }
    }

    render() {
        const pokemon = this.props.pokemon;
        const items = this.props.items;
        if(pokemon === undefined){
            return null;
        }

        return (
            <section className="single-pokemon">
                {pokemon.name}
            </section>
        )
    }
}

export default PokemonDetail;