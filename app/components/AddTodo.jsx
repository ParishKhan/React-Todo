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
            <div className="container_footer">
                <form onSubmit={this.addTodo.bind(this)}>
                    <input type="text" ref="todo" placeholder="What do you need to do?" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;