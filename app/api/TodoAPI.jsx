import uuid from 'uuid';

export default {
    setTodos(todos) {
        if(Array.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos() {
        var stringTodo = localStorage.getItem('todos');
        var todos = []

        try {
            todos = JSON.parse(stringTodo);
        } catch(e) {
            
        }

        return Array.isArray(todos) ? todos : []
    }
}