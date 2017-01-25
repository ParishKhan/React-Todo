import React, {Component} from 'react';
import uuid from 'uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

class TodoApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        }
    }
    componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos)
    }
    handleAddTodo(todo) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: todo,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    }
    handleOnToggle(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if(todo.id == id) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
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
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

        return (
            <div>
                <h1 className="page-title">TODO APP</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-6">
                        <div className="container">
                            <TodoSearch onSearch={this.handleOnSearch.bind(this)} />
                            <TodoList todos={filteredTodos} onToggle={this.handleOnToggle.bind(this)}/>
                            <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoApp;


