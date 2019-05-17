import React from 'react';

const TodoListItem = ({ todo }) => (
    <>
        <li> Todo # {todo.id}</li>
        <li> Title: {todo.title}</li>
        <li> Body: {todo.body}</li>
        <li> Completed: {todo.done ? "True" : "False"}</li>
    </>
)

export default (props) => (
    <ul>
        {props.todos.map(todo => (
            <TodoListItem key={todo.id} todo={todo} />
        ))
        }
    </ul>
)

