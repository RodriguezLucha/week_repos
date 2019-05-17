import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, fetchTodos, createTodo } from '../../actions/todo_actions';
import { receiveErrors, clearErrors } from '../../actions/error_actions';

const mapStateToProps = function(state) {
    return {
        todos: allTodos(state),
        errors: receiveErrors(state.errors)
    }
}

const mapDispatchToProps = (dispatch) => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: (todo) => dispatch(createTodo(todo)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);