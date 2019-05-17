import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

const todosReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case RECEIVE_TODOS:
             action.todos.forEach( (todo, index) => newState[index] = todo );
             return newState;
        case RECEIVE_TODO:
             newState = merge(newState, state);
             newState[action.todo.id] = action.todo;
             return newState;
        default: 
            return state;
    };
};

export default todosReducer;