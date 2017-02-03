import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class TodoSearch extends Component {
    render() {
        var {dispatch, searchText, showCompleted} = this.props;

        return (
            <div className="container_header">
                <div>
                    <input type="text" placeholder="Search Todo's" ref="searchText" value={searchText} onChange={() => {
                        var searchText = this.refs.searchText.value;
                        dispatch(actions.setSearchText(searchText));
                    }} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                            var showCompleted = this.refs.showCompleted.checked;
                            dispatch(actions.toggleShowCompleted());
                        }} />
                        Show Completed todos
                    </label>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            searchText: state.searchText,
            showCompleted: state.showCompleted
        }
    }
)(TodoSearch);