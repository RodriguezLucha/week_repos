import { connect } from 'react-redux'
import { selectAllItems } from '../../reducers/selectors'
import { requestSinglePokemon } from '../../actions/pokemon_actions'
import PokemonDetail from '../pokemon/pokemon_detail'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => ({
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    items: selectAllItems(state)
});

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetail));