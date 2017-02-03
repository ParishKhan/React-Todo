import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

export class TodoList extends Component {
    render() {
        var {todos, showCompleted, searchText} = this.props;
      //  debugger;
        var renderTodos = () => {
            if(todos.length === 0) {
                return (
                    <p className="container_message">Nothing To Do</p>
                );
            };

           return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
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

export default connect(
    (state) => {
        return state;
    }
)(TodoList)