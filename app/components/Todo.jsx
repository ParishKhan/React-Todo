import React, {Component} from 'react';
import moment from 'moment';

class Todo extends Component {
    render() {
        var {id, text, completed, createdAt, completedAt} = this.props;
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
            <div onClick={() => {
                this.props.onToggle(id)
            }}>
                <input type="checkbox" checked={completed} />
                <p>{text}</p>
                <p>{rederDate()}</p>
            </div>
        );
    }
}

export default Todo;