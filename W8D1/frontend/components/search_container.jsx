import Search from './search';
import {fetchPlanks} from '../actions/plank_actions';
import {connect} from 'react-redux';
import {asArray} from '../reducers/selectors';

//Might be entities.planks..
const mapStateToProps = (state) => ({
  planks: asArray(state.entities),
});

const mapDispatchToProps = dispatch => ({
  fetchPlanks: () => dispatch(fetchPlanks()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);