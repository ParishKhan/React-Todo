import React, {Component} from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
    render() {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
}

export default TodoApp;
