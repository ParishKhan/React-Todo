import React, {Component} from 'react';

class AddTodo extends Component {
    addTodo(e) {
        e.preventDefault();
        var newTodo = this.refs.todo.value;
        if(newTodo.length > 0) {
            this.refs.todo.value = "";
            
            this.props.onAddTodo(newTodo);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addTodo.bind(this)}>
                    <input type="text" ref="todo" />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;