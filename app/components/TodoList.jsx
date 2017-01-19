import React, {Component} from 'react';
import Todo from 'Todo';

class TodoList extends Component {
    render() {
        var {todos} = this.props;
        var renderTodos = () => {
           return todos.map((todo) => {
                return <Todo key={todo.id} {...todo} />
            });
        }
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

export default TodoList;