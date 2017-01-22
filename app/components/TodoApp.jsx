import React, {Component} from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'uuid';

class TodoApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: "Feed the cat",
                    completed: false
                },
                {
                    id: uuid(),
                    text: "Clean the room",
                    completed: true
                },
                {
                    id: uuid(),
                    text: "Learn react",
                    completed: true
                },
                {
                    id: uuid(),
                    text: "Learn Node",
                    completed: false
                }
            ]
        }
    }
    handleAddTodo(todo) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: todo,
                    completed: false
                }
            ]
        })
    }
    handleOnToggle(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if(todo.id == id) {
                todo.completed = !todo.completed
            }
            return todo;
        })

        this.setState({todos: updatedTodos})
    }
    handleOnSearch(searchText, showCompleted) {
        this.setState({
            searchText: searchText.toLowerCase(),
            showCompleted: showCompleted
        });
    }
    render() {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleOnSearch} />
                <TodoList todos={todos} onToggle={this.handleOnToggle.bind(this)}/>
                <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
            </div>
        );
    }
}

export default TodoApp;
