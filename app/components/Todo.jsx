import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {FBtoggleTodo} from 'actions';

export class Todo extends Component {
    render() {
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var rederDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if(completed) {
                message = "Completed ";
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format("MMMM Do, YYYY @ h:mm A")
        }
        return (
            <div className={todoClassName} onClick={() => {
               // this.props.onToggle(id)
               dispatch(FBtoggleTodo(id, !completed));
            }}>
                <div>
                    <input type="checkbox" checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className='todo_subtext'>{rederDate()}</p>
                </div>
            </div>
        );
    }
}

export default connect()(Todo);