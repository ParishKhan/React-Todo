import React, {Component} from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: "Feed the cat"
                },
                {
                    id: 2,
                    text: "Clean the room"
                },
                {
                    id: 3,
                    text: "Learn react"
                }
            ]
        }
    }
    handleAddTodo(todo) {
        alert("New Todo: " + todo);
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
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
}

export default TodoApp;
