export const fetchTodos = () => (
    $.ajax({
        method: 'GET',
        url: '/api/todos'
    })
)
export const createTodo = ( {body, title, done} ) => (
    $.ajax({
        method: 'POST',
        url: '/api/todos',
        data: { todo: {body, title, done}}
    })
)